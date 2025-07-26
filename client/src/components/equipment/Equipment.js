import React from 'react';

const Equipment = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Equipment</h1>
        <button className="btn btn-primary">Add Equipment</button>
      </div>
      
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Equipment Management</h2>
        <p className="text-gray-600">
          This section will contain equipment management functionality including:
        </p>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>• View all equipment</li>
          <li>• Add new equipment</li>
          <li>• Track equipment status</li>
          <li>• Schedule maintenance</li>
          <li>• Monitor usage</li>
        </ul>
      </div>
    </div>
  );
};

export default Equipment;