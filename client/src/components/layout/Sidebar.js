import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Calendar,
  Dumbbell,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { user, logout } = useAuth();

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
      roles: ['admin', 'staff', 'trainer', 'member']
    },
    {
      name: 'Members',
      href: '/members',
      icon: Users,
      roles: ['admin', 'staff']
    },
    {
      name: 'Trainers',
      href: '/trainers',
      icon: UserCheck,
      roles: ['admin', 'staff']
    },
    {
      name: 'Classes',
      href: '/classes',
      icon: Calendar,
      roles: ['admin', 'staff', 'trainer', 'member']
    },
    {
      name: 'Equipment',
      href: '/equipment',
      icon: Dumbbell,
      roles: ['admin', 'staff', 'trainer']
    },
    {
      name: 'Payments',
      href: '/payments',
      icon: CreditCard,
      roles: ['admin', 'staff']
    },
    {
      name: 'My Bookings',
      href: '/my-bookings',
      icon: Calendar,
      roles: ['member']
    },
    {
      name: 'My Classes',
      href: '/my-classes',
      icon: Calendar,
      roles: ['trainer']
    }
  ];

  const filteredNavItems = navigationItems.filter(item =>
    item.roles.includes(user?.role)
  );

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''} lg:relative lg:translate-x-0 fixed z-50`}>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-700">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Dumbbell className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">FitGym</h2>
            <p className="text-xs text-gray-400">Management System</p>
          </div>
        </div>

        {/* User Info */}
        <div className="mb-6 p-3 bg-gray-800 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium">
                {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium truncate">{user?.fullName}</p>
              <p className="text-gray-400 text-xs capitalize">{user?.role}</p>
              <p className="text-gray-400 text-xs">{user?.userId}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-1">
            {filteredNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `sidebar-link ${isActive ? 'active' : ''}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Settings and Logout */}
        <div className="border-t border-gray-700 pt-4 mt-4">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setIsOpen(false)}
          >
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </NavLink>
          <button
            onClick={handleLogout}
            className="sidebar-link w-full text-left hover:bg-red-600"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;