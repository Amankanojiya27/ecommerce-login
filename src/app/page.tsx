// app/page.tsx
import Navbar from "@/components/Navbar";

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
    image: "img/Wireless-Earbuds.jpg",
   
  },
  {
    id: 2,
    name: "Gaming Laptop",
    price: "$1200",
    image: "img/Gaming-Laptop.jpg",
   
  },
  {
    id: 3,
    name: "Smartphone",
    price: "$200",
    image: "img/Smartphone.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-[80vh] text-center p-4 bg-indigo-400">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopKart 🛒</h1>
        <p className="text-lg mb-6">Your one-stop shop for all your needs.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className=" p-4 rounded-md shadow-md transition transform hover:scale-105 bg-gray-50 "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-fit rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg text-blue-600 mb-4">{product.price}</p>
              <button className="shadow rounded-md py-2 px-5 text-center font-semibold bg-indigo-700 text-white hover:cursor-pointer" >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <a
          href="/login"
          className="shadow rounded-md py-2 px-5 text-center font-semibold bg-indigo-700 text-white hover:cursor-pointer mt-6"
        >
          Login to Continue
        </a>
      </main>
    </>
  );
}
