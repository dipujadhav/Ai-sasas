const express = require('express');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/equipment
// @desc    Get all equipment
// @access  Private (Admin, Staff, Trainer)
router.get('/', protect, authorize('admin', 'staff', 'trainer'), async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Equipment endpoint - Coming soon',
      data: []
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;