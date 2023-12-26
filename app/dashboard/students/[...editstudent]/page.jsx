"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

const EditStudentPage = () => {
  const router = useRouter();
  // const { studentId } = router.query;
  const params = useParams();
  console.log("params:", params);
  const studentId = params.editstudent;
  console.log("studentId:", studentId);

  const [editedStudent, setEditedStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    // Add other fields as needed
  });

  useEffect(() => {
    // Fetch students data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/users/${studentId}`
        );
        console.log("API Response:", response.data);
        setEditedStudent(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [studentId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleUpdateStudent = async () => {
    try {
      // Implement your update logic here
      console.log("Updating student:", editedStudent);
      // Assuming you have an API endpoint for updating students
      await axios.put(
        `https://dummyjson.com/users/${studentId}`,
        editedStudent
      );
      // Redirect to the StudentsPage after updating
      router.push("/dashboard/students");
      window.alert("Updated successfully");
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Edit Student
          </h2>
          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={editedStudent.firstName}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={editedStudent.lastName}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={editedStudent.email}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="text"
                id="password"
                name="password"
                value={editedStudent.password}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={editedStudent.phone}
                onChange={handleInputChange}
                className="input-field"
              />
              <div>
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={editedStudent.age}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
            </div>
            <div>
              <button
                onClick={handleUpdateStudent}
                className="bg-blue-500 text-white py-2 px-4 rounded-md mx-1 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Update
              </button>
              <button
                onClick={() => router.push("/dashboard/students")}
                className="bg-red-500 text-white py-2 px-4 rounded-md mx-1 hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStudentPage;
