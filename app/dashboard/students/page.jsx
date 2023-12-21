"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 6;
  const router = useRouter();

  useEffect(() => {
    // Fetch students data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        console.log("API Response:", response.data);
        setStudents(response.data.users);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  // Convert students object to an array before using filter
  const studentArray = Object.values(students);

  const filteredStudents = students.filter(
    (student) =>
      student &&
      ((student.firstName &&
        student.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.lastName &&
          student.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.email &&
          student.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.phone &&
          student.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.website &&
          student.website.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.company?.name &&
          student.company.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())))
  );

  // Pagination
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddStudent = () => {
    // Implement your logic to add a new student
    console.log("Add new student functionality");
  };

  const handleDeleteStudent = (studentId) => {
    console.log(`Deleting student with ID ${studentId}`);
    // Implement your delete functionality here
    // For example, you can update the state to remove the student from the list
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== studentId)
    );
  };

  const handleEditStudent = (studentId) => {
    // Use router.push to navigate with the studentId as a query parameter
    router.push(`/dashboard/students/edit?studentId=${studentId}`);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* ... (your existing sidebar code) */}

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold mb-2">Students</h2>
          <div className="mr-2">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search students..."
              className="px-4 py-2 mr-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Add New Student Button */}
            <button
              onClick={handleAddStudent}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add New Student
            </button>
          </div>
        </div>

        {/* Display Students */}
        <div>
          {/* Table */}
          <div className="grid grid-cols-7 gap-4 mb-2">
            <div className="col-span-2 ml-20">Name</div>
            <div className="col-span-1">Email</div>
            <div className="col-span-1">Phone</div>
            <div className="col-span-1">Website</div>
            <div className="col-span-1">Company Name</div>
            <div className="col-span-1"></div>
          </div>

          {/* Table rows */}
          {currentStudents.map((student) => (
            <div
              key={student.id}
              className="grid grid-cols-7 items-center border-solid bg-slate-300 rounded-md m-2"
            >
              {/* Display Image using Next.js Image Component */}
              <div className="col-span-2 flex items-center">
                <Image
                  src={student.image}
                  alt={`${student.firstName} ${student.lastName}`}
                  width={60} // Set the desired width
                  height={60} // Set the desired height
                />{" "}
                <div className="ml-1">
                  <h3 className="font-semibold">
                    {student.firstName} {student.lastName}
                  </h3>
                </div>
              </div>

              <div className="col-span-1">{student.email}</div>
              <div className="col-span-1">{student.phone}</div>
              <div className="col-span-1">{student.domain}</div>
              <div className="col-span-1">{student.company?.name}</div>
              {/* Edit and Delete buttons */}
              <div className="col-span-1 flex items-center">
                <button
                  onClick={() => handleEditStudent(student.id)}
                  className="bg-border-transparent text-green-800 py-2 px-4 rounded-md mx-1 hover:bg-green-200 focus:outline-none focus:ring focus:border-blue-300"
                  title="Edit Student"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => handleDeleteStudent(student.id)}
                  className="bg-border-transparent text-red-700 py-2 px-4 rounded-md mx-1 hover:bg-red-300 focus:outline-none focus:ring focus:border-black"
                  title="Delete Student"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {Array.from(
              { length: Math.ceil(studentArray.length / studentsPerPage) },
              (_, i) => i + 1
            ).map((page) => (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={`mx-1 py-2 px-4 rounded-md ${
                  page === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500"
                } hover:bg-blue-100 focus:outline-none focus:ring focus:border-blue-300`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
