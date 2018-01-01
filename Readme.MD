# Stellar Lumen XLM SDK 
#### Encode and Decode User Keys to make requests on the Stellar Lumen Network

This small project is to assist other with starting to the [Stellar Lumens SDK](https://github.com/stellar/js-stellar-sdk). The [documentation](https://www.stellar.org/developers/guides/get-started/create-account.html) is very helpful in understanding how the library operates, this code example let's you store the keys generated locally to reuse the same account with other transactions. 


#### Installation
Download and install the latest [Node.JS](https://nodejs.org/en/download/)

`npm install --save stellar-sdk`

`npm install --save stellar-base`

#### Application
To create keys and send to a file `cd system_procedures` and then `node a_create_keys_to_file.js'. 

To read the keys from file and use them to create the account run `node b_create_account_on_network.js`.

To read the public key from file to check your account balance run `node b_create_account_on_network.js`.

While a library should be made in the future with this code, it helped to pass the hurdle when starting to use the SDK that all of the examples required the generation of a new Keypair. Have fun!