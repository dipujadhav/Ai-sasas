import React from 'react';

const Members = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Members</h1>
        <button className="btn btn-primary">Add Member</button>
      </div>
      
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Member Management</h2>
        <p className="text-gray-600">
          This section will contain member management functionality including:
        </p>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>• View all members</li>
          <li>• Add new members</li>
          <li>• Edit member information</li>
          <li>• Manage memberships</li>
          <li>• Track member activity</li>
        </ul>
      </div>
    </div>
  );
};

export default Members;