const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

     toString(){
        return `Block - 
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash.substring(0,10)}
            Hash: ${this.hash.substring(0,10)}
            data: ${this.data}
        `;
    }

    static genesis(){
        return new this('my-burfd4y', '------', 'w31c0m3', []);
    }

    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);
        return new this(timestamp, lastHash, hash, data);
    }

    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${JSON.stringify(data)}`).toString();
    }

    static blockHash(block){
        return Block.hash(block.timestamp, block.lastHash, block.data);
    }
}

module.exports = Block;