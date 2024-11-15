const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/loginusers",
  [
    body("email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    console.log("Login route hit");

    // Validate input fields
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Find user by email
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      // Compare passwords directly as plain text
      if (password !== user.password) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      // If password matches, login is successful
      res.json({ success: true });
    } catch (error) {
      console.log("Error fetching user:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

module.exports = router;
