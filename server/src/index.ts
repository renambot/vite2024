import express from "express";
import { Request, Response } from "express";
const cors = require("cors");
const morgan = require("morgan");

// a typescript Type
type Toto = {
  name: string;
  age: number;
};

// a variable
const toto: Toto = {
  name: "Toto",
  age: 52,
};
// output
const message: string = "Hello>";
console.log(message, toto);

// EXPRESS web server
const app: express.Application = express();
const port: number = 4000;
app.use(cors());
// set up morgan middleware: logs
app.use(morgan("tiny"));

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello World");
});
app.get("/init", (req: Request, res: Response) => {
  return res.send({ val: 32 });
});

app.get("/users/:name", (req: Request, res: Response) => {
  return res.send({ greeting: `Hello ${req.params.name}` });
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
