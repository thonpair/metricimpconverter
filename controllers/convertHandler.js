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
    let result;
    const num = this.getNum(initNum)
    const unit = this.getUnit(initUnit)
    let returnNum = 0
    switch(unit.toLowerCase()){
      case 'gal':
        returnNum = num * galToL
        break;
      case 'l':
        returnNum = num / galToL;
        break;
      case 'mi':
        returnNum = num * miToKm;
        break;
      case 'km':
        returnNum = num / miToKm;
        break;
      case 'lbs':
        returnNum = num * lbsToKg;
        break;
      case 'kg':
        returnNum = num / lbsToKg;
        break;
      default:
        result = undefined 
    }
    
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
