"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const EditStudentPage = ({ params }) => {
  const router = useRouter();
  const { studentId } = router.query;
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/users/${studentId}`
        );
        console.log("Fetched Student:", response.data);
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    if (studentId) {
      fetchStudent();
    }
  }, [studentId]);

  const handleUpdateStudent = async (updatedStudent) => {
    try {
      // Implement your update logic here
      console.log("Updating student:", updatedStudent);
      // Assuming you have an API endpoint for updating students
      await axios.put(
        `https://dummyjson.com/users/${studentId}`,
        updatedStudent
      );
      // Redirect to the StudentsPage after updating
      router.push("/students");
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div>
      <h2>Edit Student</h2>
      {student && (
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Include input fields for editing student details */}
          {/* For example, you can use similar input fields as in the Add New Student form */}
          {/* Don't forget to populate the fields with the values from the fetched student */}
          <button
            onClick={() => handleUpdateStudent(student)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mx-1 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Update
          </button>
          <button
            onClick={() => router.push("/students")}
            className="bg-red-500 text-white py-2 px-4 rounded-md mx-1 hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default EditStudentPage;
