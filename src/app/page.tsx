import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-pink-100 bg-opacity-80 px-6 py-4 sticky top-0 z-50">
        <div className="flex gap-4">
          <Link href="#" className="text-lg font-bold text-[#5e4d54]">
            Home
          </Link>
          <Link href="#" className="text-lg font-bold text-[#5e4d54]">
            Blog
          </Link>
          <Link href="/produk" className="text-lg font-bold text-[#5e4d54]">
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

      {/* Jumbotron */}
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
          <h1 className="text-3xl font-bold mb-4">Welcome to De La Reina</h1>
          <p className="text-lg mb-6">
            De La Reina is a unique fashion brand that celebrates timeless
            vintage style, offering pieces that embody elegance and charm from
            the past. With a personalized style request service, we help you
            bring your vision to life, ensuring each piece reflects your unique
            taste with a touch of classic sophistication. Embrace vintage, made
            just for you.
          </p>
          <Link
            href="/produk"
            className="px-6 py-3 bg-pink-300 text-[#4d2b2b] font-bold rounded hover:bg-pink-400 transition-colors"
          >
            See Products
          </Link>
        </div>
      </section>

      {/* Purchase Instructions */}
      <section className="flex items-center justify-center bg-pink-50 p-8 h-[50vh]">
        <div className="max-w-sm mr-8">
          <h2 className="text-2xl font-bold mb-4 text-black">
            How to Purchase
          </h2>
          <ol className="list-decimal ml-4 text-lg space-y-2 text-black">
            <li>Browse our collection or create a unique style request.</li>
            <li>
              Click the <strong>Purchase</strong> button to start your order.
            </li>
            <li>
              Select <strong>Contact Us on WhatsApp</strong> to finalize your
              purchase or request a custom design directly with our team.
            </li>
          </ol>
        </div>
        <div>
          <img
            src="/dressw.png"
            alt="De La Reina Product"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
      {/* Catchphrase Section */}
      <section className="flex items-center justify-center bg-pink-200 p-8 h-[50vh]">
        <div className="mr-8">
          <Image
            src="/fam.png" // Ensure this path is correct
            alt="Vintage Inspiration"
            width={220}
            height={220}
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="text-2xl font-bold text-[#5e4d54]">
          Vintage is not just a style but a story waiting to be worn.
        </p>
      </section>
    </div>
  );
};

export default Home;
