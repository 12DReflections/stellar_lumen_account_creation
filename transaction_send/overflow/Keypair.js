var fs = require('fs');

// A class for referencing KeyPair methods to read and write from files
var method = KeyPair.prototype;


function KeyPair() {
}

method.getPublicKey = function(value) {
	return 1
};

module.exports = KeyPair;