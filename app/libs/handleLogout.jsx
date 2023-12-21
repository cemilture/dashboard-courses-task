"use client";

export const handleLogout = async () => {
  // const response = NextResponse.json("token");
  // response.cookies.delete("token");
  // return response;
  // Delete the 'token' cookie
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

  // Redirect to the login page
  window.location.href = "/login";
};
