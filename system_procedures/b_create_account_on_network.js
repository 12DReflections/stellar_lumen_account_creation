var fs = require('fs');
var StellarSdk = require('stellar-sdk');
var StellarBase = require('stellar-base');

/*
Create account on network with Keys Loaded from file
*/
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
path_k = __dirname + "/user_p_key.txt";

// Buffer Array Initialised for the Public Key
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0];
var buffer_k = Buffer.from(arr)
//console.log(buffer_k)

// Read and encode Public Key from file
fs.open(path_k, 'r+', function(err, fd) {  
    if (err) {
        throw 'could not open file: ' + err;
    }
    // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
    fs.read(fd, buffer_k, 0, buffer_k.length, null, function(err) {
        if (err) throw 'error reading file: ' + err;
        fs.close(fd, function() {
            console.log('Key fileread successfully');
            var user_encoded_k = StellarBase.StrKey.encodeEd25519PublicKey(buffer_k);
            console.log('Is it a valid public key?');
            console.log(StellarBase.StrKey.isValidEd25519PublicKey(user_encoded_k));

            console.log(user_encoded_k);


            // Create The account on the test server.
             var request = require('request');
            request.get({
              url: 'https://horizon-testnet.stellar.org/friendbot',
              qs: { addr: user_encoded_k },
              json: true
            }, function(error, response, body) {
              if (error || response.statusCode !== 200) {
                console.error('ERROR!', error || body);
              }
              else {
                console.log('SUCCESS! You have a new account :)\n', body);
              }
            }); 
        });
    });
});


