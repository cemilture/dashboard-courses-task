import React from "react";
import { FaUser, FaBook, FaMoneyBill, FaUsers } from "react-icons/fa";

const page = () => {
  const data = [
    { title: "Students", icon: <FaUser className="text-4xl" /> },
    { title: "Courses", icon: <FaBook className="text-4xl" /> },
    { title: "Payments", icon: <FaMoneyBill className="text-4xl" /> },
    { title: "Users", icon: <FaUsers className="text-4xl" /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-md shadow-md mb-4 text-center"
        >
          {item.icon}
          <p className="text-lg font-semibold mt-2 mb-2">{item.title}</p>
          {/* Add dynamic content specific to each section */}
        </div>
      ))}
    </div>
  );
};

export default page;
