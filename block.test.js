const Block = require("./block");

describe('Block', () => {
    let  data, lastBlock, block;

    beforeEach(()=>{
        data = {lorem:"ipsum"};
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    })

    it('Sets the `data` to match given input', () => {
        expect(block.data).toEqual(data);
    });

    it('Sets the `lastHash` to match theh hash of the last block', () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
})