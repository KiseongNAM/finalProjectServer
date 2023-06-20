const express = require("express");
const router = express.Router();

/* setting DB */
const sqlite3 = require("sqlite3").verbose();

let freeBoardDb = new sqlite3.Database("./public/DB/FreeBoard.db", (err) => {
  if (err) return console.error(err);

  console.log("Connected to the FreeBoard database");
});

router.post("/", async (req, res, next) => {
  freeBoardDb.run(
    "INSERT INTO freeboard (title, content) VALUES (?, ?);",
    [req.body["title-board"], req.body["content-board"]],
    function (err) {
      if (err) return console.error(err);
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    }
  );
  res.redirect("/freeboard");
});

module.exports = router;
