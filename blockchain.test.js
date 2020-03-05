const Blockchain = require("./blockchain");
const Block = require("./block");
const _ = require("lodash");

describe("bc", () => {
  let bc;
  let bc2;

  beforeEach(() => {
    bc = new Blockchain();
    bc2 = new Blockchain();
  });

  it("Should start with genesis block.", () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it("Appends a given `block` to the end of the bc.", () => {
    const data = { lorem: "ipsum" };
    bc.addBlock(data);
    expect(_.takeRight(bc.chain)[0].data).toEqual(data);
  });

  it("Should validate an valid chain.", () => {
    const data = { lorem: "ipsum" };
    bc2.addBlock(data);
    expect(bc.isValid(bc2.chain)).toBe(true);
  });

  it("Should invalidate a chain with a corrupt genesis block.", () => {
    bc2.chain[0].data = { money: "al the..." };
    expect(bc.isValid(bc2.chain)).toBe(false);
  });

  it("Should invalidate a chain with a corrupt block.", () => {
    const data = { lorem: "ipsum" };
    bc2.addBlock(data);
    bc2.chain[1].data = { money: "al the..." };
    expect(bc.isValid(bc2.chain)).toBe(false);
  });

  it("Should replace the bc with a valid chain", () => {
    const data = { lorem: "ipsum" };
    bc2.addBlock(data);
    bc.replaceChain(bc2.chain)
    expect(bc.chain).toEqual(bc2.chain);
  });

  it("Should not replace the chain with a chain of one of less than or euqal to length", () => {
    const data = { lorem: "ipsum" };
    bc2.addBlock(data);
    bc2.replaceChain(bc.chain)
    expect(bc.chain).not.toEqual(bc2.chain);
  });
});
