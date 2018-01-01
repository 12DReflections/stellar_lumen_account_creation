var fs = require('fs');
var StellarBase = require('stellar-base');
var StellarSdk = require('stellar-sdk');


/*
Creates an account with a Public Key and Seed,
Writes the Public Key and Seed to a file and read it back. 
*/


// create a completely new and unique pair of keys
// see more about KeyPair objects: https://stellar.github.io/js-stellar-sdk/Keypair.html
var user = StellarSdk.Keypair.random();
//user.secret();
//user.publicKey();

var buffer_k = StellarBase.StrKey.decodeEd25519PublicKey(user.publicKey());
var buffer_s = StellarBase.StrKey.decodeEd25519SecretSeed(user.secret());

// Initialise the buffer to read into from files
var arr = [null,null,null,null,null,null,null,null,null,null,
            null,null,null,null,null,null,null,null,null,null,
            null,null,null,null,null,null,null,null,null,null,null,null];
var buffer_read = Buffer.from(arr);
var b_s = buffer_read;
var b_k = buffer_read;

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


// Read and encode Public Key from file
fs.open(path_k, 'r+', function(err, fd) {  
    if (err) {
        throw 'could not open file: ' + err;
    }
    // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
    fs.read(fd, b_k, 0, b_k.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('Key fileread successfully');
            var user_encoded_k = StellarBase.StrKey.encodeEd25519PublicKey(b_k);
			console.log('Is it a valid public key?');
			console.log(StellarBase.StrKey.isValidEd25519PublicKey(user_encoded_k));
        });
    });
});

// Read and encode Seed from file
fs.open(path_s, 'r+', function(err, fd) {  
    if (err) {
        throw 'could not open file: ' + err;
    }
    // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
    fs.read(fd, b_s, 0, b_s.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('Key fileread successfully');
            var user_encoded_s = StellarBase.StrKey.encodeEd25519SecretSeed(b_s);
			console.log('Is it a seed key?');
			console.log(StellarBase.StrKey.isValidEd25519SecretSeed(user_encoded_s));
        });
    });
});

