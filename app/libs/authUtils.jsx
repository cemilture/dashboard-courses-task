import { jwtVerify } from "jose";

export const getJwtSecretKey = () => {
  const secretKey = process.env.JWT_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Jwt secret key is not available");
  } else {
    return new TextEncoder().encode(secretKey);
  }
};

export async function verifyJwtToken(token) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());

    return payload;
  } catch (error) {
    return null;
  }
}
