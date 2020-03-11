const Block = require("./block");

describe("Block", () => {
  let data, lastBlock, block;

  beforeEach(() => {
    data = { lorem: "ipsum" };
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });

  it("Sets the `data` to match given input", () => {
    expect(block.data).toEqual(data);
  });

  it("Sets the `lastHash` to match theh hash of the last block", () => {
    expect(block.lastHash).toEqual(lastBlock.hash);
  });

  it("Generates a hash that matches the block difficulty", () => {
    expect(block.hash.substring(0, block.difficulty)).toEqual("0".repeat(block.difficulty));
  });

  it("Decreases the difficulty for slowly mined blocks", () => {
    expect(Block.adjustDifficulty(block, block.timestamp + 36000)).toEqual(
      block.difficulty - 1
    );
  });

  it("Raises the difficulty for quickly mined blocks", () => {
    expect(Block.adjustDifficulty(block, block.timestamp + 1)).toEqual(
      block.difficulty + 1
    );
  });
});
