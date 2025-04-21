// components/LoginForm.tsx
"use client";

import { useRouter } from "next/navigation"; // ✅ Correct for App Router
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const text = await res.text();

      const data = text ? JSON.parse(text) : {};

      if (res.ok) {
        // ✅ Token mil gaya, store in localStorage
        localStorage.setItem("token", data.token);
        console.log("Login successful:", data);

        // Redirect to dashboard
        router.push("/");
      } else {
        setError("Login failed. Check credentials.");
      }
    } catch (err) {
      console.error("❌ Login failed:", err);
      setError("Login failed. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 border rounded-md shadow-md w-80"
    >
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-indigo-400 text-white py-2 rounded hover:bg-indigo-700"
      >
        Login
      </button>
    </form>
  );
}
