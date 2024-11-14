import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between mb-6">
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-lg font-bold text-white hover:text-pink-300"
            >
              About Us
            </Link>
            <Link
              href="/produk"
              className="text-lg font-bold text-white hover:text-pink-300"
            >
              Our Products
            </Link>
            <Link
              href="/review"
              className="text-lg font-bold text-white hover:text-pink-300"
            >
              Review
            </Link>
            <Link
              href="/tim"
              className="text-lg font-bold text-white hover:text-pink-300"
            >
              Our Team
            </Link>
          </div>

          <div className="flex items-center">
            <Image
              src="/logo0.png"
              alt="De La Reina Logo"
              width={60}
              height={60}
            />
          </div>
        </div>

        <div className="text-center text-sm">
          <p>&copy; 2024 De La Reina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
