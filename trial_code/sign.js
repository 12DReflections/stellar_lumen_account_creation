var fs = require('fs');
var StellarSdk = require('stellar-sdk');
var StellarBase = require('stellar-base');


// Derive Keypair object and public key (that starts with a G) from the secret


path_s = __dirname + "/user_seed.txt"

// Initialise the buffer to read into from files
var arr = [null,null,null,null,null,null,null,null,null,null,
            null,null,null,null,null,null,null,null,null,null,
            null,null,null,null,null,null,null,null,null,null,null,null];
 
var b_s = Buffer.from(arr);



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

			// Derive Keypair object and public key (that starts with a G) from the secret
			var sourceKeypair = StellarSdk.Keypair.fromSecret(user_encoded_s);
			var sourcePublicKey = sourceKeypair.publicKey();

			console.log(sourcePublicKey);
			console.log('nnnnnnnnnnnnnn')
			        });
			    });
});



