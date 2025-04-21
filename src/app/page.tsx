// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/dashboard");
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  if (checkingAuth) {
    return <p className="text-center mt-10">Checking login status...</p>;
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">🛍️ Welcome to MyShop!</h1>
      <p className="text-lg mb-6">Please log in to explore your dashboard.</p>
      <a
        href="/login"
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-800"
      >
        Login Now
      </a>
    </div>
  );
}
