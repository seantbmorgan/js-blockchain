const Block = require("./block");
const _ = require("lodash");

class Blockchain{
    constructor(){
        this.chain = [Block.genesis()];
    }

    addBlock(data){
        const block = Block.mineBlock(_.takeRight(this.chain), data);
        this.chain = _.concat(this.chain, block);
        return block;
    }
}

module.exports = Blockchain;