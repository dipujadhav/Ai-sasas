# 🏋️ FitGym Manager - Comprehensive Gym Management System

A modern, responsive web application for managing gym operations including member management, class scheduling, trainer coordination, equipment tracking, and payment processing.

## ✨ Features

### 🔐 Authentication & Authorization
- **User ID & Password Login** - Simple ID-based authentication
- **Role-based Access Control** - Admin, Staff, Trainer, and Member roles
- **JWT Token Authentication** - Secure session management
- **Password Protection** - Encrypted password storage

### 👥 User Management
- **Multi-role Support**: Admin, Staff, Trainer, Member
- **Profile Management** - Update personal information
- **User Activity Tracking** - Monitor login history

### 📊 Dashboard
- **Role-specific Dashboards** - Customized views for each user type
- **Real-time Statistics** - Member counts, revenue, class attendance
- **Interactive Charts** - Revenue trends, membership distribution
- **Quick Actions** - Easy access to common tasks

### 🏃 Member Management
- Member registration and profiles
- Membership type management
- Activity tracking
- Payment history

### 👨‍🏫 Trainer Management
- Trainer profiles and schedules
- Class assignments
- Performance tracking
- Student management

### 📅 Class Management
- Class scheduling and booking
- Capacity management
- Attendance tracking
- Trainer assignments

### 🏋️ Equipment Management
- Equipment inventory
- Maintenance scheduling
- Usage tracking
- Status monitoring

### 💳 Payment Processing
- Payment history
- Invoice generation
- Outstanding dues tracking
- Financial reports

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gym-management-app
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp server/.env.example server/.env
   
   # Edit the .env file with your MongoDB URI and other settings
   ```

4. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   
   # Or make sure your MongoDB cloud service is running
   ```

5. **Seed the database with demo data**
   ```bash
   cd server
   npm run seed
   ```

6. **Start the development servers**
   ```bash
   # From the root directory
   npm run dev
   ```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🔑 Demo Login Credentials

| Role    | User ID    | Password    | Description                          |
|---------|------------|-------------|--------------------------------------|
| Admin   | ADMIN001   | password123 | Full system access and management    |
| Staff   | STAFF001   | password123 | Member and day-to-day operations     |
| Trainer | TRAINER001 | password123 | Class and student management         |
| Member  | MEMBER001  | password123 | Personal dashboard and bookings      |

## 🏗️ Project Structure

```
gym-management-app/
├── client/                          # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/               # Authentication components
│   │   │   ├── dashboard/          # Dashboard components
│   │   │   ├── layout/             # Layout components (Sidebar, etc.)
│   │   │   ├── members/            # Member management
│   │   │   ├── trainers/           # Trainer management
│   │   │   ├── classes/            # Class management
│   │   │   ├── equipment/          # Equipment management
│   │   │   ├── payments/           # Payment management
│   │   │   ├── settings/           # Settings
│   │   │   └── common/             # Shared components
│   │   ├── contexts/               # React contexts
│   │   ├── hooks/                  # Custom hooks
│   │   └── utils/                  # Utility functions
├── server/                         # Node.js backend
│   ├── models/                     # MongoDB models
│   ├── routes/                     # API routes
│   ├── middleware/                 # Express middleware
│   ├── scripts/                    # Database scripts
│   └── utils/                      # Utility functions
└── package.json                    # Root package.json
```

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **Axios** - HTTP client
- **React Hook Form** - Form handling
- **Recharts** - Data visualization
- **Lucide React** - Icon library
- **React Toastify** - Notifications
- **Custom CSS** - Responsive styling with utility classes

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Express Validator** - Input validation

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (< 768px)

### Mobile Features
- **Collapsible Sidebar** - Swipe-friendly navigation
- **Touch-optimized UI** - Larger buttons and touch targets
- **Responsive Charts** - Scales appropriately on all devices
- **Mobile-first Forms** - Optimized input fields and layouts

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - bcrypt for password security
- **Role-based Access** - Endpoint protection by user role
- **Input Validation** - Server-side validation for all inputs
- **CORS Protection** - Cross-origin request handling

## 🚀 Development

### Available Scripts

```bash
# Root directory
npm run dev              # Start both frontend and backend
npm run install-all      # Install all dependencies
npm run build           # Build for production

# Server directory
npm run server          # Start backend only
npm run seed           # Seed database with demo data

# Client directory
npm run client         # Start frontend only
npm start             # Start frontend
npm run build         # Build frontend for production
```

### Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gym_management
JWT_SECRET=your_jwt_secret_key_here_change_in_production
JWT_EXPIRE=30d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

## 🔮 Future Enhancements

- **Real-time Notifications** - WebSocket integration
- **Mobile App** - React Native version
- **Advanced Analytics** - Detailed reporting and insights
- **Integration APIs** - Connect with fitness devices and payment gateways
- **Multi-language Support** - Internationalization
- **Calendar Integration** - Google Calendar sync
- **Email Notifications** - Automated reminders and updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the demo credentials and features

---

**Built with ❤️ for fitness enthusiasts and gym managers worldwide**