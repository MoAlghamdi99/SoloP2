import express from "express";
import * as blogController from '../controllers/blogController.js'

const router = express.Router();

router.get('/', blogController.getAllBlogs);

router.get('/:id', blogController.getBlogByID);

router.post('/', blogController.createBlogPost);

router.put('/like/:id', blogController.likeBlogPost);

router.post('/:id/comment', blogController.addBlogComment);

router.put('/:id/comment/like/:commentIndex', blogController.likeBlogComments);

router.delete('/:id', blogController.deleteBlogPost);

export default router;