var fs = require('fs');
var StellarBase = require('stellar-base');
var StellarSdk = require('stellar-sdk');


function getPublicKey(path_k) {

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
                 user_encoded_k


            });
        });
    });
};
path_k = __dirname + "/user_p_key_1.txt";
var k = getPublicKey(path_k)
console.log(k + 'blep');
console.log('1111blep');

StellarSdk.Network.useTestNetwork();
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
var sourceKeys = StellarSdk.Keypair
  .fromSecret('SCZANGBA5YHTNYVVV4C3U252E2B6P6F5T3U6MM63WBSBZATAQI3EBTQ4');
var destinationId = 'GA2C5RFPE6GCKMY3US5PAB6UZLKIGSPIUKSLRB6Q723BM2OARMDUYEJ5';

//Get public key 1

// Get public key 2


//Print public key 1 && 2 to screen 