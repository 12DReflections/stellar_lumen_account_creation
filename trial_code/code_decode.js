var StellarBase = require('stellar-base');
var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

/*
Encode Decode public keys
https://stellar.github.io/js-stellar-base/strkey.js.html
*/


// Make the keypair
var user = StellarSdk.Keypair.random();
//console.log(user.publicKey());
//console.log(user.secret());
//console.log(user.rawSecretKey());
//console.log(user);


// Decode Public Key 
var user_decoded = StellarBase.StrKey.decodeEd25519PublicKey(user.publicKey());
console.log(user_decoded);
console.log('Is a it valid a valid public key?');
console.log(StellarBase.StrKey.isValidEd25519PublicKey(user_decoded));

// Encode Public Key 
var user_encoded = StellarBase.StrKey.encodeEd25519PublicKey(user_decoded);
console.log('Is it a valid public key?');
console.log(StellarBase.StrKey.isValidEd25519PublicKey(user_encoded));

// Decode Seed
var user_decoded_s = StellarBase.StrKey.decodeEd25519SecretSeed(user.secret());
console.log('Is it valid a valid seed?');
console.log(StellarBase.StrKey.isValidEd25519SecretSeed(user_decoded_s));

// Encode Seed 
var user_encoded_s = StellarBase.StrKey.encodeEd25519SecretSeed(user_decoded_s);
console.log('Is it valid a valid seed?');
console.log(StellarBase.StrKey.isValidEd25519SecretSeed(user_encoded_s));