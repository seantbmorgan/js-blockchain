const Blockchain = require("./blockchain");
const winston = require("./winston");

const alphaChain = new Blockchain();
const chainStartTime = Date.now();
const blockCount = 10;
winston.info("Testing Blockcahin Mine Speeds...");
for (let i = 0; i < blockCount; i++) {
    let blockStartTime = Date.now();
    let minedBlock = alphaChain.addBlock({ credits: i }).toString();
    let blockEndTime = Date.now();
  winston.info(`${minedBlock} mined in ${(blockEndTime - blockStartTime)/1000} seconds.`);
}
const chainCompletedTime = Date.now();
winston.info(`Testing Blockcahin Mine Speeds completed mining ${blockCount} blocks in ${(chainCompletedTime - chainStartTime)/1000} seconds.`);