const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/contact — submit contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const contact = await Contact.create({ name, email, subject, message });
    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    console.error("Contact form error:", err.message);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

// GET /api/contact — fetch all messages (admin)
router.get("/", async (_req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
