const router = require('express').Router();
const { readPosts } = require('../helpers');

// Atividade 03
router.get('/posts', (req, res) => {
  const posts = readPosts();

  if (!posts) return res.status(200).json({ posts: [] });
  return res.status(200).json(posts);
});

router.get('/posts/:id', (req, res) => {
  const { id = null } = req.params;
  const posts = readPosts(id);
  if (!id || !posts) return res.status(404).json({ message: 'post not found' });
  return res.status(200).json(posts);
});

// Atividade 04

module.exports = router;
