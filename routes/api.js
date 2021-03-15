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
      if (initUnit  === undefined && initNum == undefined){
        return res.status(401).send({message: 'invalid number and unit'})
      }
      if (initNum == undefined){
        return res.status(401).send({message: 'invalid number'})
      }
      if (initUnit  === undefined){
        return res.status(401).send({message: 'invalid unit'})
      }
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      //example :  {"initNum":5,"initUnit":"kg","returnNum":11.02312,"returnUnit":"lbs","string":"5 kilograms converts to 11.02312 pounds"} 
      return res.status(200).json({
        "initNum":initNum,
        "initUnit":initUnit,
        "returnNum":returnNum,
        "returnUnit":returnUnit,
        "string": toString
      })
    });
    
};
