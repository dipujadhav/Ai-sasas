import React from 'react';

const Payments = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
        <button className="btn btn-primary">Process Payment</button>
      </div>
      
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Payment Management</h2>
        <p className="text-gray-600">
          This section will contain payment management functionality including:
        </p>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>• View payment history</li>
          <li>• Process new payments</li>
          <li>• Manage invoices</li>
          <li>• Track outstanding dues</li>
          <li>• Generate financial reports</li>
        </ul>
      </div>
    </div>
  );
};

export default Payments;