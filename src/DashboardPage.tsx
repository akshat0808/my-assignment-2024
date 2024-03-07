// src/DashboardPage.tsx
import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
  <h2 className="text-2xl font-semibold mb-4">Dashboard Page</h2>
  <p className="text-gray-600">This is a protected page. Only authenticated users can access it.</p>
</div>

  );
};

export default DashboardPage;
