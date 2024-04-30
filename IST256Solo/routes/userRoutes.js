import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

// Get all users
router.get('/', userController.getAllUsers);

// Get user by ID
router.get('/getUserByID/:id', userController.getUserByID);

// Create a new user
router.post('/', userController.createUser);

// Login
router.post('/login', userController.login);

export default router;
