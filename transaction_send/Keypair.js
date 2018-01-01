
// buz.js
var Buz = function() {}; 

Buz.prototype.log = function () {
  console.log("buz!");
};
module.exports = new Buz();
/*
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

			  //Check Balance
			  // the JS SDK uses promises for most actions, such as retrieving an account
			  server.loadAccount(user_encoded_k).then(function(account) {
			    console.log('Balances for account: ' + user_encoded_k);
			    account.balances.forEach(function(balance) {
			      console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
			    });
			  });            
        });
    });
});
*/