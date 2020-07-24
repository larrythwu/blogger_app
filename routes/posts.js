const express = require("express");
const router = express.Router(); //getting the app from app.js
const Post = require("../models/Post");

//reading from the db
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find(); //read all the posts
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/first", (req, res) => {
  res.send("First Post");
});

//writing to the database
router.post("/", async (req, res) => {
  console.log(req.body);

  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific Post (the url after posts/.... is the params)
router.get("/:postId", async (req, res) => {
  console.log(req.params.postId);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete a post
router.delete("/:postId", async (req, res) => {
  try {
    // const removedPost = await Post.remove({_id: req.params.postId});
    const removedPost = await Post.findByIdAndRemove(req.params.postId);
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update
router.patch("/:postId", async (req, res) => {
  try {
    const updated = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updated);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
