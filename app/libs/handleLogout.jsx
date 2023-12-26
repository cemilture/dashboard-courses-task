"use client";

export const handleLogout = async () => {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

  // Redirect to the login page
  window.location.href = "/";
};
