const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

const seedUsers = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gym_management');
    console.log('Connected to MongoDB');

    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Demo users
    const users = [
      {
        userId: 'ADMIN001',
        email: 'admin@fitgym.com',
        password: 'password123',
        firstName: 'John',
        lastName: 'Admin',
        role: 'admin',
        phone: '+1-555-0101',
        isActive: true
      },
      {
        userId: 'STAFF001',
        email: 'staff@fitgym.com',
        password: 'password123',
        firstName: 'Jane',
        lastName: 'Staff',
        role: 'staff',
        phone: '+1-555-0102',
        isActive: true
      },
      {
        userId: 'TRAINER001',
        email: 'trainer1@fitgym.com',
        password: 'password123',
        firstName: 'Mike',
        lastName: 'Johnson',
        role: 'trainer',
        phone: '+1-555-0103',
        isActive: true
      },
      {
        userId: 'TRAINER002',
        email: 'trainer2@fitgym.com',
        password: 'password123',
        firstName: 'Sarah',
        lastName: 'Wilson',
        role: 'trainer',
        phone: '+1-555-0104',
        isActive: true
      },
      {
        userId: 'MEMBER001',
        email: 'member1@fitgym.com',
        password: 'password123',
        firstName: 'Alice',
        lastName: 'Smith',
        role: 'member',
        phone: '+1-555-0105',
        isActive: true
      },
      {
        userId: 'MEMBER002',
        email: 'member2@fitgym.com',
        password: 'password123',
        firstName: 'Bob',
        lastName: 'Brown',
        role: 'member',
        phone: '+1-555-0106',
        isActive: true
      },
      {
        userId: 'MEMBER003',
        email: 'member3@fitgym.com',
        password: 'password123',
        firstName: 'Carol',
        lastName: 'Davis',
        role: 'member',
        phone: '+1-555-0107',
        isActive: true
      }
    ];

    // Insert users
    for (const userData of users) {
      const user = new User(userData);
      await user.save();
      console.log(`Created user: ${user.userId} (${user.role})`);
    }

    console.log('✅ Demo users created successfully!');
    console.log('\n📋 Demo Login Credentials:');
    console.log('Admin: ADMIN001 / password123');
    console.log('Staff: STAFF001 / password123');
    console.log('Trainer: TRAINER001 / password123');
    console.log('Member: MEMBER001 / password123');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedUsers();