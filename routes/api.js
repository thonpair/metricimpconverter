/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      //example :  {"initNum":5,"initUnit":"kg","returnNum":11.02312,"returnUnit":"lbs","string":"5 kilograms converts to 11.02312 pounds"} 
//      res.json({"initNum":0,"initUnit":"","returnNum":0,"returnUnit":"","string":""})
    });
    
};
