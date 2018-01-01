var StellarBase = require('stellar-base');
var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');


// Write user details to file
var fs = require('fs');
var util = require('util');

// Create the account on the test server.
var request = require('request');

// Make the keypair
var user = StellarSdk.Keypair.random();

request.get({
  url: 'https://horizon-testnet.stellar.org/friendbot',
  qs: { addr: user.publicKey() },
  json: true
}, function(error, response, body) {
  if (error || response.statusCode !== 200) {
    console.error('ERROR!', error || body);
  }
  else {
    console.log('SUCCESS! You have a new account :)\n', body);

    console.log(user.publicKey());
    //Check Balance
	// the JS SDK uses promises for most actions, such as retrieving an account
	server.loadAccount(user.publicKey()).then(function(account) {
	  console.log('Balances for account: ' + user.publicKey());
	  account.balances.forEach(function(balance) {
	    console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
	  });
	});
  }
}); 