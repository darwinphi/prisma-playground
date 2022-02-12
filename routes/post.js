import express from "express";
import prismaClient from "@prisma/client";
const { PrismaClient } = prismaClient;

const router = express.Router();
const { user, post } = new PrismaClient();

router.post("/", async (req, res) => {
  const { title, content, user_id } = req.body;

  const userExists = await user.findUnique({
    where: {
      id: user_id,
    },
  });

  if (!userExists) {
    return res.status(400).json({
      message: "User Not Found",
    });
  }

  const newPost = await post.create({
    data: {
      title,
      post: content,
      user_id,
    },
  });
  res.json(newPost);
});

router.get("/", async (req, res) => {
  const posts = await post.findMany();

  res.json(posts);
});

router.get("/:user_id", async (req, res) => {
  const { user_id } = req.params;

  const posts = await post.findMany({
    where: {
      user_id: parseInt(user_id),
    },
  });

  res.json(posts);
});

export default router;
