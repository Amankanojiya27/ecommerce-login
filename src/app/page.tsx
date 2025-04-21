// app/page.tsx

import Navbar from "@/component/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-[80vh] text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopKart 🛒</h1>
        <p className="text-lg mb-6">Your one-stop shop for all your needs.</p>
        <a
          href="/login"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Login to Continue
        </a>
      </main>
    </>
  );
}
