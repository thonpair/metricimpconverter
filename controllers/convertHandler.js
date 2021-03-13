/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  let units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
  
  splitNumUnit = function (input){
    let result = [];
    units.map(unit => {
      if (result.length === 0){
        const indexInput = input.indexOf(unit);
        if (indexInput > -1){
          // check if a number was provided, or only unit
          if (indexInput !== 0) {
            //push number
            result.push(input.substring(0,indexInput))
          } else {
            // push 1 if not number provided
            result.push('1')
          }
          //push unit
          result.push(input.substring(indexInput))
        }
      }
    })
    return result;
  };

  this.getNum = function(input) {
    const inputNum = (splitNumUnit(input)[0])
    const regex = /^\d+\.?\d*\/?\d*$/;
    return inputNum.match(regex) === null
            ? undefined
            : inputNum.match(regex)[0];
  };
  
  this.getUnit = function(input) {
    const indexUnit = units.indexOf(input)
    return indexUnit === -1
    ? undefined
    : units[indexUnit]
  };
  
  this.getReturnUnit = function(initUnit) {
    const indexUnit = units.indexOf(initUnit.toLowerCase())
    if (indexUnit === -1) return '';
    const returnIndex = indexUnit % 2 === 0
                        ? indexUnit + 1
                        : indexUnit -1;
    return units[returnIndex] === 'l'
            ? 'L'
            : units[returnIndex]
  };

  this.spellOutUnit = function(unit) {
    let result;

    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
