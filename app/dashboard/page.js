import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Students</h2>
        {/* Add dynamic content for students */}
      </div>
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Courses</h2>
        {/* Add dynamic content for courses */}
      </div>
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Payments</h2>
        {/* Add dynamic content for payments */}
      </div>
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Users</h2>
        {/* Add dynamic content for users */}
      </div>
    </div>
  );
};

export default page;
