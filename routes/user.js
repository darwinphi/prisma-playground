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

export default router;
