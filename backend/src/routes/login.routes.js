import express from 'express';
import { loginController } from '../controllers/login.controler.js';

const router = express.Router();

router.post('/', loginController.login);
router.post('/verify-otp', loginController.verifyOTP);

export default router;