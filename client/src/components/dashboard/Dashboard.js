import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  Users,
  UserCheck,
  Calendar,
  Dumbbell,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Clock
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalMembers: 245,
    activeMembers: 220,
    totalTrainers: 15,
    totalClasses: 32,
    monthlyRevenue: 45000,
    revenueGrowth: 12.5,
    todayClasses: 8,
    equipmentTotal: 120,
    equipmentWorking: 115
  });

  // Sample data for charts
  const revenueData = [
    { month: 'Jan', revenue: 35000, members: 200 },
    { month: 'Feb', revenue: 38000, members: 215 },
    { month: 'Mar', revenue: 42000, members: 230 },
    { month: 'Apr', revenue: 45000, members: 245 },
    { month: 'May', revenue: 48000, members: 250 },
    { month: 'Jun', revenue: 52000, members: 265 }
  ];

  const membershipData = [
    { name: 'Basic', value: 120, color: '#3b82f6' },
    { name: 'Premium', value: 80, color: '#10b981' },
    { name: 'VIP', value: 45, color: '#f59e0b' }
  ];

  const classAttendanceData = [
    { day: 'Mon', attendance: 85 },
    { day: 'Tue', attendance: 92 },
    { day: 'Wed', attendance: 78 },
    { day: 'Thu', attendance: 89 },
    { day: 'Fri', attendance: 95 },
    { day: 'Sat', attendance: 88 },
    { day: 'Sun', attendance: 72 }
  ];

  // Role-based dashboard content
  const getDashboardCards = () => {
    switch (user?.role) {
      case 'admin':
      case 'staff':
        return [
          {
            title: 'Total Members',
            value: stats.totalMembers,
            change: '+8.2%',
            changeType: 'positive',
            icon: Users,
            color: 'blue'
          },
          {
            title: 'Active Members',
            value: stats.activeMembers,
            change: '+5.1%',
            changeType: 'positive',
            icon: UserCheck,
            color: 'green'
          },
          {
            title: 'Monthly Revenue',
            value: `$${stats.monthlyRevenue.toLocaleString()}`,
            change: `+${stats.revenueGrowth}%`,
            changeType: 'positive',
            icon: DollarSign,
            color: 'emerald'
          },
          {
            title: 'Today\'s Classes',
            value: stats.todayClasses,
            change: '2 upcoming',
            changeType: 'neutral',
            icon: Calendar,
            color: 'purple'
          }
        ];
      case 'trainer':
        return [
          {
            title: 'My Classes Today',
            value: 4,
            change: 'Next at 2:00 PM',
            changeType: 'neutral',
            icon: Calendar,
            color: 'blue'
          },
          {
            title: 'Students This Week',
            value: 45,
            change: '+3 new',
            changeType: 'positive',
            icon: Users,
            color: 'green'
          },
          {
            title: 'Class Rating',
            value: '4.8/5',
            change: '+0.2 this month',
            changeType: 'positive',
            icon: TrendingUp,
            color: 'yellow'
          },
          {
            title: 'Hours This Month',
            value: 68,
            change: '12 hours left',
            changeType: 'neutral',
            icon: Clock,
            color: 'purple'
          }
        ];
      case 'member':
        return [
          {
            title: 'Classes This Week',
            value: 3,
            change: '2 remaining',
            changeType: 'neutral',
            icon: Calendar,
            color: 'blue'
          },
          {
            title: 'Workout Streak',
            value: 7,
            change: 'days',
            changeType: 'positive',
            icon: TrendingUp,
            color: 'green'
          },
          {
            title: 'Next Class',
            value: 'Yoga',
            change: 'Tomorrow 9:00 AM',
            changeType: 'neutral',
            icon: Dumbbell,
            color: 'purple'
          },
          {
            title: 'Membership',
            value: 'Premium',
            change: 'Expires in 45 days',
            changeType: 'neutral',
            icon: UserCheck,
            color: 'yellow'
          }
        ];
      default:
        return [];
    }
  };

  const cards = getDashboardCards();

  const getCardColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      emerald: 'bg-emerald-500',
      purple: 'bg-purple-500',
      yellow: 'bg-yellow-500',
      red: 'bg-red-500'
    };
    return colors[color] || 'bg-gray-500';
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-blue-100">
          {user?.role === 'admin' && 'Here\'s what\'s happening at your gym today.'}
          {user?.role === 'staff' && 'Ready to help members achieve their fitness goals?'}
          {user?.role === 'trainer' && 'Time to inspire and train your students!'}
          {user?.role === 'member' && 'Ready for another great workout?'}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
                  <div className="flex items-center mt-2">
                    {card.changeType === 'positive' && (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    )}
                    {card.changeType === 'negative' && (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm ${
                      card.changeType === 'positive' ? 'text-green-600' :
                      card.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {card.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${getCardColorClasses(card.color)}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section - Only for Admin and Staff */}
      {(user?.role === 'admin' || user?.role === 'staff') && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Monthly Revenue & Members</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#3b82f6" name="Revenue ($)" />
                <Bar dataKey="members" fill="#10b981" name="Members" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Membership Distribution */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Membership Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={membershipData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {membershipData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Class Attendance */}
          <div className="card lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Weekly Class Attendance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={classAttendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="attendance" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Recent Activity - For Trainers and Members */}
      {(user?.role === 'trainer' || user?.role === 'member') && (
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">
            {user?.role === 'trainer' ? 'Upcoming Classes' : 'My Schedule'}
          </h3>
          <div className="space-y-3">
            {user?.role === 'trainer' ? (
              <>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium">Morning Yoga</p>
                    <p className="text-sm text-gray-600">Today, 9:00 AM - 10:00 AM</p>
                  </div>
                  <span className="badge badge-info">15 enrolled</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium">HIIT Training</p>
                    <p className="text-sm text-gray-600">Today, 2:00 PM - 3:00 PM</p>
                  </div>
                  <span className="badge badge-success">12 enrolled</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div>
                    <p className="font-medium">Strength Training</p>
                    <p className="text-sm text-gray-600">Tomorrow, 6:00 PM - 7:00 PM</p>
                  </div>
                  <span className="badge badge-warning">8 enrolled</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium">Yoga with Sarah</p>
                    <p className="text-sm text-gray-600">Tomorrow, 9:00 AM - 10:00 AM</p>
                  </div>
                  <span className="badge badge-info">Booked</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium">Cardio Blast</p>
                    <p className="text-sm text-gray-600">Friday, 6:00 PM - 7:00 PM</p>
                  </div>
                  <span className="badge badge-success">Booked</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Personal Training Session</p>
                    <p className="text-sm text-gray-600">Saturday, 10:00 AM - 11:00 AM</p>
                  </div>
                  <span className="badge badge-warning">Scheduled</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;