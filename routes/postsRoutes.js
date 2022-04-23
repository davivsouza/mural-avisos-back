import express, { json } from 'express'
const router = express.Router()
import {getAll, newPost } from "../model/posts.js";

router.use(json())

router.get("/all", (req, res) => {
  res.json(getAll());
});

router.post("/new", (req, res) => {

  const { title, description } = req.body;

  newPost(title, description)

  res.send('Post added')
});


export default router