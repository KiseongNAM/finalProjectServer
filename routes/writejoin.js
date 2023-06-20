const express = require("express");
const router = express.Router();

const sqlite3 = require("sqlite3").verbose();

let joinDb = new sqlite3.Database("./public/DB/WriteJoin.db", (err) => {
  if (err) return console.error(err);

  console.log("Connected to the Join database");
});

router.post("/", async (req, res, next) => {
  joinDb.run(
    "INSERT INTO WRITEJOIN (ID, PWD, STD_NUM, NICKNAME) VALUES (?, ?, ?, ?);",
    [
      req.body["input-id"],
      req.body["input-password"],
      req.body["student-number"],
      req.body["nickname"],
    ],
    function (err) {
      if (err) return console.error(err);
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    }
  );
  res.redirect("/");
});

module.exports = router;
