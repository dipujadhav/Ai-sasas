const express = require('express');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/members
// @desc    Get all members
// @access  Private (Admin, Staff)
router.get('/', protect, authorize('admin', 'staff'), async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Members endpoint - Coming soon',
      data: []
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;