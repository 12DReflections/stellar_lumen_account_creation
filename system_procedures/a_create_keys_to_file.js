var fs = require('fs');
var StellarBase = require('stellar-base');
var StellarSdk = require('stellar-sdk');


/*
Creates an account with a Public Key and Seed,
Writes the Public Key and Seed to a file. 
*/


// create a completely new and unique pair of keys
// see more about KeyPair objects: https://stellar.github.io/js-stellar-sdk/Keypair.html
var user = StellarSdk.Keypair.random();
//user.secret();
//user.publicKey();

var buffer_k = StellarBase.StrKey.decodeEd25519PublicKey(user.publicKey());
var buffer_s = StellarBase.StrKey.decodeEd25519SecretSeed(user.secret());

path_k = __dirname + "/user_p_key.txt";
path_s = __dirname + "/user_seed.txt";

// Decode and write Public Key to file
fs.open(path_k, 'w', function(err, fd) {  
    if (err) {
        throw 'could not open file: ' + err;
    }
    // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
    fs.write(fd, buffer_k, 0, buffer_k.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('Key filewrite successfully');
        });
    });
});

// Decode and write Seed to file
fs.open(path_s, 'w', function(err, fd) {  
    if (err) {
        throw 'could not open file: ' + err;
    }
    // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
    fs.write(fd, buffer_s, 0, buffer_s.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('Seed filewrite successfully');
        });
    });
});
