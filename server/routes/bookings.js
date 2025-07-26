const express = require('express');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/bookings
// @desc    Get all bookings
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Bookings endpoint - Coming soon',
      data: []
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;