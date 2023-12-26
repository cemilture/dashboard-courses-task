import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyJwtToken } from "./app/libs/authUtils";

const AUTH_PAGES = ["/login", "register", "forgot-password"];

const isAuthPages = (url) => AUTH_PAGES.some((page) => page.startsWith(url));

export async function middleware(request) {
  const cookie = cookies();
  const { url, nextUrl } = request;
  const { value: token } = cookie.get("token") ?? { value: null };
  console.log(token);

  const hasVerifiedToken = token && verifyJwtToken(token);
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if (isAuthPageRequested) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      return response;
    }
    const response = NextResponse.redirect(new URL("/dashboard", url));
    return response;
  }

  if (!hasVerifiedToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname); //login olunca gitmek istediği sayfaya gitmesi için

    return NextResponse.redirect(new URL(`/login?${searchParams}`, url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
