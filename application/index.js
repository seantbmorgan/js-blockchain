const express = require("express");
const bodyParser = require("body-parser");
const Blockchain = require("../blockchain");

const winston = require("winston");
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'logfile.log' })
    ]
  });

const HTTP_PORT = process.env.HTTP_PORT || 3001;

app = express();
app.use(bodyParser.json());

const bc = new Blockchain();

app.get("/blocks", (req, res) => {
  res.json(bc.chain);
});

app.post("/mine", (req, res) => {
  const block = bc.addBlock(req.body.data);
  logger.info(`New block added ${block.toString()}`);
  res.redirect("/blocks");
});

app.listen(HTTP_PORT, () =>
  logger.info(`[STARTED] Blockchain application, listening on port ${HTTP_PORT}`)
);
