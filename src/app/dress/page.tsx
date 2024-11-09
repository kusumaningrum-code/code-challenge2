import Image from "next/image";
import Link from "next/link";

const Dresses = () => {
  const dresses = [
    { id: 1, name: "Code: #DWH01", image: "/dressw.png" },
    { id: 2, name: "Code: #DBB01", image: "/dress2.png" },
    { id: 3, name: "Code: #DWH02", image: "/dress3.png" },
    { id: 4, name: "Code: #DBL01", image: "/dress4.png" },
    { id: 5, name: "Code: #DBL02", image: "/dress5.png" },
    { id: 6, name: "Code: #DBB02", image: "/dress9.png" },
    { id: 7, name: "Code: #DPN01", image: "/dress7.png" },
    { id: 8, name: "Code: #DGR01", image: "/dress8.png" },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-pink-100 bg-opacity-80 px-6 py-4 sticky top-0 z-50">
        <div className="flex gap-4">
          <Link href="/" className="text-lg font-bold text-[#5e4d54]">
            Home
          </Link>
          <Link href="#" className="text-lg font-bold text-[#5e4d54]">
            Blog
          </Link>
          <Link
            href="/produk"
            className="text-lg font-bold text-[#5e4d54] hover:text-red-700"
          >
            Our Products
          </Link>
        </div>

        <div className="logo">
          <Image
            src="/logo0.png"
            alt="De La Reina Logo"
            width={100}
            height={100}
          />
        </div>

        <div className="flex gap-4">
          <Link href="#" className="text-lg font-bold text-[#5e4d54]">
            Purchase
          </Link>
          <Link href="#" className="text-lg font-bold text-[#5e4d54]">
            Review
          </Link>
          <Link href="#" className="text-lg font-bold text-[#5e4d54]">
            Our Team
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-gray-900"
        style={{
          backgroundImage: "url('/herdress.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="bg-white bg-opacity-70 p-12 rounded-lg shadow-lg text-center max-w-xl">
          <h1 className="text-3xl font-bold mb-4">Our Dresses</h1>
          <p className="text-lg mb-6">
            Discover our stunning collection of dresses, crafted to suit every
            style and occasion. Browse through our selection to find your
            perfect fit, or if you have something unique in mind, feel free to
            request a custom design below. We are here to make your fashion
            dreams a reality!
          </p>
        </div>
      </section>

      {/* Dress Marketplace Section */}
      <section className="py-12 bg-purple-200">
        <h2 className="text-2xl font-bold text-center mb-8">
          Available Dresses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {dresses.map((dress) => (
            <div
              key={dress.id}
              className="bg-pink-200 shadow-lg rounded-lg p-4 flex flex-col items-center"
            >
              <Image
                src={dress.image}
                alt={dress.name}
                width={200}
                height={300}
                className="rounded-lg"
              />
              <h3 className="text-lg font-bold mt-4 mb-2">{dress.name}</h3>
              <button className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 mt-auto">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dresses;
