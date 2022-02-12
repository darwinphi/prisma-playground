import express from "express";
import prismaClient from "@prisma/client";
const { PrismaClient } = prismaClient;

const router = express.Router();
const { user } = new PrismaClient();

router.get("/", async (req, res) => {
  const users = await user.findMany({
    select: {
      username: true,
      posts: true,
    },
  });

  res.json(users);
});

router.post("/", async (req, res) => {
  const { username } = req.body;
  const userExists = await user.findUnique({
    where: {
      username: username,
    },
    select: {
      username: true,
    },
  });

  if (userExists) {
    userExists &&
      res.status(400).json({
        message: "Username already taken",
      });
  } else {
    const newUser = await user.create({
      data: {
        username: username,
      },
    });

    res.json(newUser);
  }
});

export default router;
