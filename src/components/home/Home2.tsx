// app/dashboard/page.tsx
"use client";

export default function DashboardPage() {

  type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
  };

  const dummyProducts: Product[] = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: "$70",
      image: "/img/Wireless-Earbuds.jpg",
    },
    {
      id: 2,
      name: "Gaming Laptop",
      price: "$1200",
      image: "/img/Gaming-Laptop.jpg",
    },
    {
      id: 3,
      name: "Smartphone",
      price: "$200",
      image: "/img/Smartphone.jpg",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <main className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-xl shadow-lg mt-8 max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to ShopKart</h1>
        <p className="text-xl text-gray-600 mb-8">Your one-stop shop for all your needs.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl bg-gray-50 hover:bg-indigo-50"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-fit rounded-md mb-6 transition duration-300 ease-in-out"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-lg text-indigo-600 mb-4">{product.price}</p>
              <button className="w-full py-3 px-6 text-lg font-semibold bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none transition duration-300 ease-in-out cursor-pointer">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
