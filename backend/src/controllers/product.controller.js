// File: src/controllers/product.controller.js
import prisma from '../config/db.config.js';

export const productController = {
  // Create product
  async create(req, res) {
    try {
      const product = await prisma.product.create({
        data: req.body
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all products
  async findAll(req, res) {
    try {
      const products = await prisma.product.findMany();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get product by id
  async findOne(req, res) {
    try {
      const product = await prisma.product.findUnique({
        where: { id: parseInt(req.params.id) }
      });
      if (!product) return res.status(404).json({ error: 'Product not found' });
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get products by shop id
  async findByShop(req, res) {
    try {
      const products = await prisma.product.findMany({
        where: { shopId: parseInt(req.params.shopId) }
      });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update product
  async update(req, res) {
    try {
      const product = await prisma.product.update({
        where: { id: parseInt(req.params.id) },
        data: req.body
      });
      res.json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete product
  async delete(req, res) {
    try {
      await prisma.product.delete({
        where: { id: parseInt(req.params.id) }
      });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};