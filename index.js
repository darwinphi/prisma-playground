import express from "express";
const server = express();
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";

server.use(express.json());
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);

server.listen(5000, () => {
  console.log("Listening on port 5000 🌱");
});
