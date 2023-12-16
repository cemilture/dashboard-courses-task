"use client";

import { useRouter } from "next/navigation";

const HandleLogout = () => {
  const router = useRouter();
  router.push("/login");
};

export { HandleLogout };
