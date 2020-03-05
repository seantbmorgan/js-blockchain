const Blockchain = require("./blockchain");
const Block = require("./block");
const _ = require("lodash");

describe("Blockchain", () => {
  let blockchain;
  let validBlockchain;
  let invalidBlockchain;

  beforeEach(() => {
    blockchain = new Blockchain();
    validBlockchain = new Blockchain();
    invalidBlockchain = new Blockchain();
  });

  it("Should start with genesis block.", () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it("Appends a given `block` to the end of the blockchain.", () => {
    const data = { lorem: "ipsum" };
    blockchain.addBlock(data);
    expect(_.takeRight(blockchain.chain)[0].data).toEqual(data);
  });

  it("Should validate an valid chain.", () => {
    const data = { lorem: "ipsum" };
    validBlockchain.addBlock(data);
    expect(blockchain.isValid(validBlockchain.chain)).toBe(true);
  });

  it("Should invalidate a chain with a corrupt genesis block.", () => {
    validBlockchain.chain[0].data = { money: "al the..." };
    expect(blockchain.isValid(validBlockchain.chain)).toBe(false);
  });

  it("Should invalidate a chain with a corrupt block.", () => {
    const data = { lorem: "ipsum" };
    validBlockchain.addBlock(data);
    validBlockchain.chain[1].data = { money: "al the..." };
    expect(blockchain.isValid(validBlockchain.chain)).toBe(false);
  });
});
