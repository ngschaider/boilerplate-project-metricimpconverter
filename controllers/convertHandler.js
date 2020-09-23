/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getIndexOfFirstLetter = function(input) {
    const regex = /[a-zA-Z]/;
    const match = input.match(regex);
    return input.indexOf(match);
  }

  this.getNum = function(input) {
    const index = this.getIndexOfFirstLetter(input);

    if(index < 0) {
      return "invalid unit";
    }

    const numStr = input.slice(0, index);

    if(numStr == "") {  
      return 1;
    }

    const slashIndex = numStr.indexOf("/");
    if(slashIndex > -1) {
      const firstNum = parseFloat(numStr.slice(0, slashIndex));
      const secondNum = parseFloat(numStr.slice(slashIndex + 1, numStr.length));
      return  firstNum / secondNum;
    } else {
      return parseFloat(numStr);
    }
  };
  
  this.getUnit = function(input) {
    const index = this.getIndexOfFirstLetter(input);

    if(index < 0) {
      return "invalid unit";
    }

    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];

    const unitStr = input.slice(index).toLowerCase();
    if(validUnits.indexOf(unitStr) < 0) {
      return "invalid unit";
    }

    return unitStr;
  };
  
  this.getReturnUnit = function(initUnit) {
    const returnUnits = {
      gal: 'l',
      l: 'gal',
      mi: 'km',
      km: 'mi',
      lbs: 'kg',
      kg: 'lbs'
    };

    return returnUnits[initUnit];
  };

  this.spellOutUnit = function(unit) {
    const spelledOutUnits = {
      gal: 'gallon',
      l: 'liter',
      mi: 'mile',
      km: 'kilometer',
      lbs: 'pound',
      kg: 'kilogram'
    };

    return spelledOutUnits[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    const factorTable = {
      gal: galToL,
      l: 1/galToL,
      lbs: lbsToKg,
      kg: 1/lbsToKg,
      mi: miToKm,
      km: 1/miToKm,
    };

    const converted = initNum * factorTable[initUnit];
    return Math.round(converted * 100000) / 100000;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const spelledInitUnit = this.spellOutUnit(initUnit);
    const spelledReturnUnit = this.spellOutUnit(returnUnit);

    return initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit;
  };
  
}

module.exports = ConvertHandler;
