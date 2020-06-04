const ChainUtil = require("../chain-util");
const winston = require("../winston");

class Transaction {
  constructor() {
    this.id = ChainUtil.id();
    this.input = null;
    this.outputs = [];
  }

  static newTransaction(senderWalllet, recipient, amount) {
    const transaction = new this();

    if (amount > senderWalllet.balance) {
      winston.error(
        `Amount ${amount} is greated than balance in senders wallet: ${senderWalllet.toString()}`
      );
      return;
    }

    transaction.outputs.push(
      ...[
        {
          amount: senderWalllet.balance - amount,
          address: senderWalllet.publicKey
        },
        {
          amount,
          address: recipient
        }
      ]
    );

    return transaction;
  }
}

module.exports = Transaction;
