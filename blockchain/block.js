const SHA256 = require('crypto-js/sha256');
const { DIFFICULTY, MINE_RATE } = require('../config');

class Block {
  constructor(timestamp, lastHash, hash, data, nonce, difficulty) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.nonce = nonce;
    this.difficulty = difficulty || DIFFICULTY;
    this.data = data;
  }

  toString() {
    return `Block - 
            Timestamp  : ${this.timestamp}
            Last Hash  : ${this.lastHash.substring(0, 10)}
            Hash       : ${this.hash.substring(0, 10)}
            Nonce      : ${this.nonce}
            Difficulty : ${this.difficulty}
            Data       : ${JSON.stringify(this.data)}
        `;
  }

  static genesis() {
    return new this('my-burfd4y', '------', 'w31c0m3', [], 0, DIFFICULTY);
  }

  static mineBlock(lastBlock, data) {
    const lastHash = lastBlock.hash;

    let { difficulty } = lastBlock;
    let hash, timestamp, nonce;

    timestamp = Date.now();
    nonce = 0;

    do {
      nonce++;
      difficulty = Block.adjustDifficulty(lastBlock, timestamp);
      hash = Block.hash(timestamp, lastHash, data, nonce, difficulty);
    } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));

    return new this(timestamp, lastHash, hash, data, nonce, difficulty);
  }

  static hash(timestamp, lastHash, data, nonce, difficulty) {
    return SHA256(
      `${timestamp}${lastHash}${JSON.stringify(data)}${nonce}${difficulty}`
    ).toString();
  }

  static blockHash(block) {
    return Block.hash(
      block.timestamp,
      block.lastHash,
      block.data,
      block.nonce,
      block.difficulty
    );
  }

  static adjustDifficulty(lastBlock, currentTime) {
    let { difficulty } = lastBlock;
    difficulty =
      lastBlock.timestamp + MINE_RATE > currentTime
        ? difficulty + 1
        : difficulty - 1;
    return difficulty;
  }
}

module.exports = Block;
