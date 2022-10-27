import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import conn from "./db/mongodb.js";
import BlogApi from "./routes/BlogApi.js";

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/blog", BlogApi);

await conn();

// app.post("/", (req, res) => {
//   console.log(req.body);
// });

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
