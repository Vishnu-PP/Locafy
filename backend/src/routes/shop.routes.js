import express from 'express';
import { shopController } from '../controllers/shop.controller.js';

const router = express.Router();

router.post('/', shopController.create);
router.get('/', shopController.findAll);
router.get('/:id', shopController.findOne);
router.put('/:id', shopController.update);
router.delete('/:id', shopController.delete);

export default router;