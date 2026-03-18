import express from 'express';
import { productController } from '../controllers/product.controller.js';

const router = express.Router();

router.post('/', productController.create);
router.get('/', productController.findAll);
router.get('/:id', productController.findOne);
router.get('/shop/:shopId', productController.findByShop);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

export default router;