import cors from "cors";
import express, { json } from "express";
import routerApi from "./src/routes/index.js";

const port = 8080;

const app = express();

const whitelist = [
  "http://localhost:8080",
  "https://myapp.co",
  "https://hoppscotch.io",
];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("no permitido"));
    }
  },
};
app.use(cors(options));
app.use(json());

routerApi(app);

app.listen(port, () => {
  console.log("Server listening to port " + port);
});
