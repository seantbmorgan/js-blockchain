const Transaction = require("./transaction");
const Wallet = require("./index");

describe("Transaction", () => {
  let transaction, wallet, recipient, amount;

  beforeEach(() => {
    wallet = new Wallet();
    amount = 50;
    recipient = "r3c1p13nt";
    transaction = Transaction.newTransaction(wallet, recipient, amount);
  });

  it("Create an output for the sender with `amount` subtracted from wallet balance", () => {
    expect(
      transaction.outputs.find(output => output.address === wallet.publicKey)
        .amount
    ).toEqual(wallet.balance - amount);
  });

  it("Create an output for the recipient with `amount` added", () => {
    expect(
      transaction.outputs.find(output => output.address === recipient).amount
    ).toEqual(amount);
  });

  describe("transaction where `amount` exceeds wallet balance", () => {
    beforeEach(() => {
      amount = 1000000;
      transaction = Transaction.newTransaction(wallet, recipient, amount);
    });

    it("fails if `amount` is greater than the wallet balance", () => {
      expect(transaction).toEqual(undefined);
    });
  });
});
