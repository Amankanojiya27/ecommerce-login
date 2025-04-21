import Link from "next/link";

// components/Navbar.tsx
export default function Navbar() {
    return (
      <nav className="w-full flex justify-between items-center p-4 bg-gray-100 px-10">
        <Link href="/" className="text-2xl font-semibold text-blue-600 decoration-0">ShopKart</Link>
        <div className="shadow rounded-md py-2 px-5 text-center bg-indigo-700">
          <Link href="/login" className="text-xl font-semibold text-white  ">Login</Link>
        </div>
      </nav>
    );
  }
  