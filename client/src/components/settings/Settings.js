import React from 'react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
        <p className="text-gray-600">
          This section will contain settings functionality including:
        </p>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>• Profile management</li>
          <li>• Change password</li>
          <li>• Notification preferences</li>
          <li>• System configuration</li>
          <li>• Data export/import</li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;