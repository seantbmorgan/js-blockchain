const ChainUtil = require("../chain-util");
const { INITIAL_BALANCE } = require("../config");

class Wallet {
    constructor(){
        this.balance = INITIAL_BALANCE;
        this.keyPair = ChainUtil.generateKeyPair();
        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    toString() {
        return `Wallet - 
                PublicKey  : ${this.publicKey.toString()}
                Balance    : ${this.balance}
            `;
      }
}

module.exports = Wallet;