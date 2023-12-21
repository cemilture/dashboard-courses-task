import { SignJWT } from "jose";
import { getJwtSecretKey } from "../../libs/authUtils";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  if (body.email === "admin@admin" && body.password === "admin") {
    const token = await new SignJWT({
      email: body.email,
      role: "admin",
    })
      .setProtectedHeader({
        alg: "HS256",
      })
      .setIssuedAt()
      .setExpirationTime(300000)
      .sign(getJwtSecretKey());
    const response = NextResponse.json({
      success: true,
    });
    response.cookies.set({
      name: "token",
      value: token,
      path: "/",
    });
    return response;
  }
  return NextResponse.json({
    success: false,
  });
}
