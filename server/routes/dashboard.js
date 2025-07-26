const express = require('express');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/dashboard
// @desc    Get dashboard stats
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Dashboard endpoint - Coming soon',
      data: {
        stats: {
          totalMembers: 245,
          activeMembers: 220,
          totalTrainers: 15,
          totalClasses: 32,
          monthlyRevenue: 45000,
          revenueGrowth: 12.5,
          todayClasses: 8,
          equipmentTotal: 120,
          equipmentWorking: 115
        }
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;