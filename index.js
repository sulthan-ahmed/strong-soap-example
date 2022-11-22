"use strict";

const soap = require('strong-soap').soap;
// wsdl of the web service this client is going to invoke. For local wsdl you can use, url = './wsdls/stockquote.wsdl'
const url = 'http://www.dneonline.com/calculator.asmx?WSDL';

const requestArgs = {
  intA: '1',
  intB: '1'
};

const options = {};
soap.createClient(url, options, function(err, client) {
  const method = client['Add'];
  method(requestArgs, function(err, result, envelope, soapHeader) {
    //response envelope
    console.log('Response Envelope: \n' + envelope);
    //'result' is the response body
    console.log('Result: \n' + JSON.stringify(result));
  });
});