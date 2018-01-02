var Q = require("q");

var KeyPair = require('./Keypair');
var pair = new KeyPair();
var path_k = 5;

var p = pair.getPublicKey();
console.log(p + " sig_1"); // error: logs "undefined sig_1" instead of key.


Q.fcall(p = pair.getPublicKey()
.then(console.log(p + " sig_2")); // error: logs "undefined sig_2" instead of key.