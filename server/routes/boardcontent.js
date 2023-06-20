const express = require("express");
const router = express.Router();

const sqlite3 = require("sqlite3").verbose();

let freeBoardDb = new sqlite3.Database("./public/DB/FreeBoard.db", (err) => {
  if (err) return console.error(err);

  console.log("Connected to the FreeBoard database");
});

router.get("/", (req, res) => {
  freeBoardDb.all("SELECT * FROM freeboard", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const liElements = rows.map(
      (row) => `<li>${row.title} - ${row.content}</li>`
    );
    const html = `<ol>${liElements.join("")}</ol>`;

    res.send(html);
  });
});

module.exports = router;
