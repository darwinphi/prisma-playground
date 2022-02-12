import express from "express";
const server = express();
import router from "./routes/user.js";

server.use(express.json());
server.use("/api/users", router);

server.listen(5000, () => {
  console.log("Listening on port 5000 🌱");
});
