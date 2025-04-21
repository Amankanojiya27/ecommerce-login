// components/SignUpForm.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup functionality here
  };

  return (
    <div className="flex justify-center items-center  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 w-full py-30">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-8 border border-gray-300 rounded-xl shadow-xl bg-white max-w-sm w-full"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>

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
          Sign Up
        </button>

        <div className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-500 hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
