"use client";

import React, { useState } from "react";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-6 rounded-md shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Manage Courses
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

export const handleLogout = async () => {
  // const response = NextResponse.json("token");
  // response.cookies.delete("token");
  // return response;
  // Delete the 'token' cookie
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

  // Redirect to the login page
  window.location.href = "/login";
};
