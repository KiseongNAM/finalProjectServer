const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();

let joinDb = new sqlite3.Database("./public/DB/WriteJoin.db", (err) => {
  if (err) return console.error(err);

  console.log("Connected to the Join database");
});

router.post("/", async (req, res, next) => {
  joinDb.get(
    "SELECT * FROM WRITEJOIN WHERE ID=? AND PWD=?;",
    [req.body["id"], req.body["password"]],
    function (err, row) {
      if (err) {
        console.error(err);
        return;
      }
      if (row) {
        console.log("login success!!");
        res.redirect("/");
      } else {
        console.log("login failed");
      }
    }
  );
});

module.exports = router;
