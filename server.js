const express = require("express");
const app = express();
const writeJoin = require("./routes/writejoin");
const cors = require("cors");
const writeFreeBoard = require("./routes/freeboard");
const login = require("./routes/login");
const freeBoardRouter = require("./routes/boardcontent");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use("/writejoin", writeJoin);
app.use("/writefreeboard", writeFreeBoard);
app.use("/confirmlogin", login);
app.use("/freeboardtitle", freeBoardRouter);

const port = 8080; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
