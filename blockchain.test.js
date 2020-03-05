const Blockchain = require("./blockchain");
const Block = require("./block");
const _ = require("lodash");

describe("Blockchain", () => {
  let blockchain;

  beforeEach(() => {
    blockchain = new Blockchain();
  });

  it("Should start with genesis block.", () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it("Appends a given `block` to the end of the blockchain.", () => {
    const data = { lorem: "ipsum" };
    blockchain.addBlock(data)
    expect(_.takeRight(blockchain.chain)[0].data).toEqual(data);
  });
});
