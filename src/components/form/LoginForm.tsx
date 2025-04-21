// components/LoginForm.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login functionality here
  };

  return (
    <div className="flex justify-center items-center w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-30">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-8 border border-gray-300 rounded-xl shadow-xl bg-white max-w-sm w-full"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

        <button
          type="submit"
          className="bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          Login
        </button>

        <div className="flex justify-between items-center mt-4">
          <label className="text-sm text-gray-500">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <Link href="/forgot-password" className="text-sm text-indigo-500 hover:underline">
            Forgot Password?
          </Link>
        </div>

        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?
          <Link href="/signup" className="text-indigo-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
