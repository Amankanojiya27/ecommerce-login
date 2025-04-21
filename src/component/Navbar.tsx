// components/Navbar.tsx
export default function Navbar() {
    return (
      <nav className="w-full flex justify-between items-center p-4 bg-gray-100">
        <a href="/" className="text-xl font-semibold">ShopKart</a>
        <div>
          <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </div>
      </nav>
    );
  }
  