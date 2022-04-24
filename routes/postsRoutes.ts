import express, { Request, Response, json } from "express";
const router = express.Router();
import { getAll, newPost, PostsType } from "../model/posts";

router.use(json());

router.get("/all", (req: Request, res: Response) => {
  res.json(getAll());
});

router.post("/new", (req: Request, res: Response) => {
  const { title, description }: PostsType = req.body;

  newPost(title, description);

  res.send("Post added");
});

export default router;
