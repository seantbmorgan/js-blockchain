const express = require("express");
const bodyParser = require("body-parser");
const Blockchain = require("../blockchain");

const winston = require("../winston");

const HTTP_PORT = process.env.HTTP_PORT || 3001;

app = express();
app.use(bodyParser.json());

const bc = new Blockchain();

app.get("/blocks", (req, res) => {
  res.json(bc.chain);
});

app.post("/mine", (req, res) => {
  const block = bc.addBlock(req.body.data);
  winston.info(`New block added ${block.toString()}`);
  res.redirect("/blocks");
});

app.listen(HTTP_PORT, () =>
winston.info(`[STARTED] Blockchain application, listening on port ${HTTP_PORT}`)
);
