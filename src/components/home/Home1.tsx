import React from "react";

function Home1() {
  return (
    <div>
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

export default Home1;
