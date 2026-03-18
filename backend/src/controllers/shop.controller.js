import prisma from '../config/db.config.js';

export const shopController = {
  // Create shop
  async create(req, res) {
    try {
      const shop = await prisma.shop.create({
        data: req.body
      });
      res.status(201).json(shop);
    } catch (error) {
      res.status(400).json({ error: error.message, err: error ,vish:"yay"});
    }
  },

  // Get all shops
  async findAll(req, res) {
    try {
      const shops = await prisma.shop.findMany();
      res.json(shops);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get shop by id
  async findOne(req, res) {
    try {
      const shop = await prisma.shop.findUnique({
        where: { id: parseInt(req.params.id) }
      });
      if (!shop) return res.status(404).json({ error: 'Shop not found' });
      res.json(shop);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update shop
  async update(req, res) {
    try {
      const shop = await prisma.shop.update({
        where: { id: parseInt(req.params.id) },
        data: req.body
      });
      res.json(shop);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete shop
  async delete(req, res) {
    try {
      await prisma.shop.delete({
        where: { id: parseInt(req.params.id) }
      });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};