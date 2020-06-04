const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const uuidV1 = require('uuid/v1');

class ChainUtil {
    constructor(){

    }

    static generateKeyPair(){
        return ec.genKeyPair();
    }

    static id(){
        return uuidV1();
    }
}

module.exports = ChainUtil;