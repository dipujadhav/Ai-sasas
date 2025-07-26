import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/layout/Sidebar';
import LoadingSpinner from './components/common/LoadingSpinner';

// Import other components (these will be created as needed)
const Members = React.lazy(() => import('./components/members/Members'));
const Trainers = React.lazy(() => import('./components/trainers/Trainers'));
const Classes = React.lazy(() => import('./components/classes/Classes'));
const Equipment = React.lazy(() => import('./components/equipment/Equipment'));
const Payments = React.lazy(() => import('./components/payments/Payments'));
const Settings = React.lazy(() => import('./components/settings/Settings'));

// Layout component for authenticated users
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 lg:ml-0 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

// Protected Route component
const ProtectedRoute = ({ children, roles = [] }) => {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (roles.length > 0 && !roles.includes(user?.role)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return <Layout>{children}</Layout>;
};

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/login" 
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
          } 
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/members"
          element={
            <ProtectedRoute roles={['admin', 'staff']}>
              <React.Suspense fallback={<LoadingSpinner />}>
                <Members />
              </React.Suspense>
            </ProtectedRoute>
          }
        />

        <Route
          path="/trainers"
          element={
            <ProtectedRoute roles={['admin', 'staff']}>
              <React.Suspense fallback={<LoadingSpinner />}>
                <Trainers />
              </React.Suspense>
            </ProtectedRoute>
          }
        />

        <Route
          path="/classes"
          element={
            <ProtectedRoute>
              <React.Suspense fallback={<LoadingSpinner />}>
                <Classes />
              </React.Suspense>
            </ProtectedRoute>
          }
        />

        <Route
          path="/equipment"
          element={
            <ProtectedRoute roles={['admin', 'staff', 'trainer']}>
              <React.Suspense fallback={<LoadingSpinner />}>
                <Equipment />
              </React.Suspense>
            </ProtectedRoute>
          }
        />

        <Route
          path="/payments"
          element={
            <ProtectedRoute roles={['admin', 'staff']}>
              <React.Suspense fallback={<LoadingSpinner />}>
                <Payments />
              </React.Suspense>
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute roles={['member']}>
              <React.Suspense fallback={<LoadingSpinner />}>
                <Classes />
              </React.Suspense>
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-classes"
          element={
            <ProtectedRoute roles={['trainer']}>
              <React.Suspense fallback={<LoadingSpinner />}>
                <Classes />
              </React.Suspense>
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <React.Suspense fallback={<LoadingSpinner />}>
                <Settings />
              </React.Suspense>
            </ProtectedRoute>
          }
        />

        {/* Default redirect */}
        <Route
          path="/"
          element={
            <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
          }
        />

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
                <p className="text-gray-600 mb-4">Page not found</p>
                <button
                  onClick={() => window.history.back()}
                  className="btn btn-primary"
                >
                  Go Back
                </button>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;