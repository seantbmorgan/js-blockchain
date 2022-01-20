const Block = require('./block');
const winston = require('../winston');
const _ = require('lodash');

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data) {
    const block = Block.mineBlock(_.takeRight(this.chain)[0], data);
    this.chain = _.concat(this.chain, block);
    return block;
  }

  isValid(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      winston.error('Non-Matching Genesis Blocks.');
      return false;
    }

    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const lastBlock = chain[i - 1];
      if (
        block.lastHash !== lastBlock.hash ||
        block.hash !== Block.blockHash(block)
      ) {
        winston.error('Block Hash Sequence Error.');
        return false;
      }
    }

    return true;
  }

  replaceChain(newChain) {
    if (newChain.length <= this.chain.length) {
      winston.error(
        'New chain supplied was not long enough to replace current chain.'
      );
      return;
    } else if (!this.isValid(newChain)) {
      winston.error('New chain supplied was not valid.');
      return;
    }
    winston.info('Replacing blockchain with new chain.');
    this.chain = newChain;
  }
}

module.exports = Blockchain;
