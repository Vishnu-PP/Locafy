import prisma from '../config/db.config.js';

export const loginController = {
  // Create shop
  async login(req, res) {
    const data = {
        ok: "true"
    }
    res.status(200).json(data)
  },

  async verifyOTP(req, res) {
    const data = {
        ok: "true"
    }
    res.status(200).json(data)
  }
};