import Image from "next/image";
import Link from "next/link";

const ProductCategories = () => {
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
        className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-gray-900"
        style={{
          backgroundImage:
            "url('https://guitar.com/wp-content/uploads/2021/03/lana-del-rey-chemtrails-1392x884-1.jpg')",
        }}
      >
        <div className="bg-transparent">
          <Image
            className="bg-transparent"
            src="/logo0.png"
            alt="De La Reina Logo"
            width={250}
            height={250}
          />
        </div>

        <div className="bg-white bg-opacity-70 p-12 rounded-lg shadow-lg text-center max-w-xl">
          <h1 className="text-3xl font-bold mb-4">Our Product Categories</h1>
          <p className="text-lg mb-6">
            Explore our curated collection of timeless vintage pieces. From
            dresses to accessories, find the perfect category to start your
            vintage lifestyle.
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-pink-100">
        {/* Category 1 */}
        <div className="bg-pink-150 p-6 rounded-lg shadow-lg">
          <Image
            src="/dress5.png"
            alt="Category 1"
            width={400}
            height={300}
            className="rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-pink-800">Dresses</h3>
          <p className="text-lg mb-4 text-pink-800">
            Explore our elegant vintage dresses for every occasion.
          </p>
          <Link
            href="/dress"
            className="text-pink-500 font-bold hover:text-pink-700"
          >
            View Dresses
          </Link>
        </div>

        {/* Category 2 */}
        <div className="bg-pink-150 p-6 rounded-lg shadow-lg">
          <Image
            src="/acc.png"
            alt="Category 2"
            width={400}
            height={300}
            className="rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-pink-800">
            Accessories
          </h3>
          <p className="text-lg mb-4 text-pink-800">
            Add a vintage touch to any outfit with our stunning accessories.
          </p>
          <Link
            href="/category/accessories"
            className="text-pink-500 font-bold hover:text-pink-700"
          >
            View Accessories
          </Link>
        </div>

        {/* Category 3 */}
        <div className="bg-pink-150 p-6 rounded-lg shadow-lg">
          <Image
            src="/top2.png"
            alt="Category 3"
            width={400}
            height={300}
            className="rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-pink-800">
            Tops & Blouses
          </h3>
          <p className="text-lg mb-4 text-pink-800">
            Find vintage tops and blouses that bring elegance and charm.
          </p>
          <Link
            href="/category/tops-blouses"
            className="text-pink-500 font-bold hover:text-pink-700"
          >
            View Tops & Blouses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductCategories;
