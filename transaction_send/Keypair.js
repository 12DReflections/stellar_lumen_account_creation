var fs = require('fs');
var StellarBase = require('stellar-base');
var StellarSdk = require('stellar-sdk');

// A class for referencing KeyPair methods to read and write from files

var method = KeyPair.prototype;


function KeyPair() {
}

method.getAge = function(n) {
    console.log(n);
    return this._age;
};

method.getPublicKey = function(path_k) {

    // Read PublicKey from filename
    // Read and encode Public Key from file
    fs.open(path_k, 'r', function(err, fd) {  
        if (err) {
            throw 'could not open file: ' + err;
        }
        // Buffer Array Initialised for the Public Key
        // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
        var arr = [null,null,null,null,null,null,null,null,null,null,null,null,
                    null,null,null,null,null,null,null,null,null,null,null,null,
                    null,null,null,null,null,null,null,null];
        var buffer_k = Buffer.from(arr);
        fs.read(fd, buffer_k, 0, buffer_k.length, null, function(err) {
            if (err) throw 'error reading file: ' + err;
            fs.close(fd, function() {
                console.log('Key fileread successfully');
                var user_encoded_k = StellarBase.StrKey.encodeEd25519PublicKey(buffer_k);
                console.log('Is it a valid public key?');
                console.log(StellarBase.StrKey.isValidEd25519PublicKey(user_encoded_k));
                console.log('Key:' + user_encoded_k);
                return user_encoded_k


            });
        });
    });
};

method.getSeed= function(path_s) {
    // Read and encode Seed from file
    fs.open(path_s, 'r', function(err, fd) {  
        if (err) {
            throw 'could not open file: ' + err;
        }
        var arr = [null,null,null,null,null,null,null,null,null,null,null,null,
                    null,null,null,null,null,null,null,null,null,null,null,null,
                    null,null,null,null,null,null,null,null];
        var buffer_k = Buffer.from(arr);
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
}

method.createKeys = function() {
    // create a completely new and unique pair of keys
    // see more about KeyPair objects: https://stellar.github.io/js-stellar-sdk/Keypair.html
    var user = StellarSdk.Keypair.random();
    //user.secret();
    //user.publicKey();

    var buffer_k = StellarBase.StrKey.decodeEd25519PublicKey(user.publicKey());
    var buffer_s = StellarBase.StrKey.decodeEd25519SecretSeed(user.secret());

    var date = new Date().toISOString();
    //console.log(date);
    path_k = __dirname + "/" + date + "user_p_key.txt";
    path_s = __dirname + "/" + date + "user_seed.txt";

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
}


module.exports = KeyPair;

/* Use: */
/* //Paste in another file 
var KeyPair = require('./Keypair');
path_k = __dirname + "/user_p_key.txt";
var pair = new KeyPair();
pair.getPublicKey(path_k);
*/