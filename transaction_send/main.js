var KeyPair = require('./Keypair');
var Q = require("q");

path_k = __dirname + "/user_p_key_1.txt";
var pair = new KeyPair(path_k);

pair.getPublicKey();
console.log(pair.getPKey());

/*var p = pair.getPublicKey(path_k);
console.log(p + " sig_1");

Q.fcall(p = pair.getPublicKey(path_k))
.then(console.log(p + " sig_2"));*/






//pair.createKeys();
//console.log(pair.getPublicKey(path_k));
//console.log(pair.getPublicKey(path_k));
