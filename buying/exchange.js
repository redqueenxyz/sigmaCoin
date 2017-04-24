// Shapeshift currencies available
// btc, ltc, ppc, drk, doge, nmc, ftc, blk, nxt, btcd, qrk, rdd, nbt, bts, bitusd, xcp, xmr

var request = require('request'); //assuming you installed this module

var exchange_rates = new Array;

request('https://shapeshift.io/getcoins', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // text = JSON.parse(body)
    // console.log(text); // Print the google web page.
  }
})

var testFnc = function() {
  request('https://shapeshift.io/rate/btc_etc', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      text = JSON.parse(body)
      console.log(text); // Print the google web page.
      exchange_rates.push(body)
      return text;
    }
  })
}
module.exports.testFnc = testFnc;


request('https://shapeshift.io/rate/ltc_etc', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    text = JSON.parse(body)
    console.log(text); // Print the google web page.
    exchange_rates.push(body)
  }
})

request('https://shapeshift.io/rate/ppc_etc', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    text = JSON.parse(body)
    console.log(text); // Print the google web page.
    exchange_rates.push(body)
  }
})

request('https://shapeshift.io/rate/bts_etc', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    text = JSON.parse(body)
    console.log(text); // Print the google web page.
    exchange_rates.push(body)
  }
})

request('https://shapeshift.io/rate/xcp_etc', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    text = JSON.parse(body)
    console.log(text); // Print the google web page.
    exchange_rates.push(body)
  }
})

request('https://shapeshift.io/rate/xmr_etc', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    text = JSON.parse(body)
    console.log(text); // Print the google web page.
    exchange_rates.push(body)
  }
})


console.log(exchange_rates)
