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
    input = input.toLowerCase( ).match( /[^a-z]/gi ) || 1;
    if(input !== 1) {
        return this.divideFraction(input);
    } else {
      return 1;
    }
  };
  
  this.getUnit = function(input) {
    input = input.toLowerCase().match(/[a-z]/gi);

    const units = ["l", "gal", "mi", "lbs", "kg", "km"];
    if(input && units.includes(input.join(""))) {
      return input.join("");
    } 

    return null;
  };

  this.divideFraction = function(input) {
    input = input.join( '' ).split( '/' );
    if(input.length <= 2) {
      return input.reduce( ( a,b ) => a / b );
    } else {
      return null;
    }
  }
  
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
      gal: 'gallons',
      l: 'liters',
      mi: 'miles',
      km: 'kilometers',
      lbs: 'pounds',
      kg: 'kilograms'
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

    return initNum + " " + spelledInitUnit + " converts to " + returnNum + " " + spelledReturnUnit;
  };
  
}

module.exports = ConvertHandler;
