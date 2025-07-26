const express = require('express');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/classes
// @desc    Get all classes
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Classes endpoint - Coming soon',
      data: []
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;