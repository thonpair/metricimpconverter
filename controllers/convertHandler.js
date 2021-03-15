/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  let units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];

  this.getNum = function(input) {
    // only letters
    if (input.match(/^[a-zA-Z]+$/)) return 1
    let inputNum = input
    if (input.match(/[a-zA-Z]+/) !== null){
      // letters found : extract numbers
      inputNum = input.substring(0,input.match(/[a-zA-Z]+/).index)
    } 
    return inputNum.match(/^\d+\.?\d*\/?\d*$/) !== null // valid numbers
        ? eval(inputNum)
        : undefined
  };
  
  this.getUnit = function(input) {
    let unitIndex = -1;
    units.map(unit => {
      if (unitIndex === - 1){
        unitIndex = input.toString().indexOf(unit)
      }
    })
    const inputUnit = unitIndex > -1
                      ? input.substring(unitIndex)
                      : input
    const unitsIndex = units.indexOf(inputUnit)
    return unitsIndex === -1
    ? undefined
    : units[unitsIndex] === 'L'
      ? 'l'
      : units[unitsIndex]
  };
  
  this.getReturnUnit = function(initUnit) {
    const indexUnit = units.indexOf(initUnit.toLowerCase())
    if (indexUnit === -1) return undefined;
    const returnIndex = indexUnit % 2 === 0
                        ? indexUnit + 1
                        : indexUnit -1;
    return units[returnIndex] === 'l'
            ? 'L'
            : units[returnIndex]
  };

  this.spellOutUnit = function(unit) {
    let result;
    if (!unit) return undefined
    switch(unit.toLowerCase()){
      case 'gal':
        result = 'gallons'
        break;
      case 'l':
        result = 'liters';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      default:
        result = undefined 
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const num = initNum
    const unit = this.getUnit(initUnit)
    let result;
    switch(unit.toLowerCase()){
      case 'gal':
        result = initNum * galToL
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      default:
        return undefined
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    const spellOutInitUnit = this.spellOutUnit(initUnit);
    const spellOutReturnUnit = this.spellOutUnit(returnUnit)
    // example 5 kilograms converts to 11.02312 pounds
    result = `${initNum} ${spellOutInitUnit} converts to ${returnNum} ${spellOutReturnUnit}`
    return result;
  };
  
}

module.exports = ConvertHandler;
