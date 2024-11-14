"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />

      <section
        className="flex flex-col items-center justify-center h-[70vh] md:h-screen bg-cover bg-center text-gray-900"
        style={{
          backgroundImage:
            "url('https://guitar.com/wp-content/uploads/2021/03/lana-del-rey-chemtrails-1392x884-1.jpg?fbclid=IwY2xjawGi7_5leHRuA2FlbQIxMAABHddCD0Mf5z28BNf63xmklsJKphK-kG425o_QogBOjAQvYOuaK1dIyFGLYg_aem_mfCxPsA8jhBZsyueho4ioQ')",
        }}
      >
        <div className="bg-transparent mb-4">
          <Image
            src="/logo0.png"
            alt="De La Reina Logo"
            width={180}
            height={180}
            className="w-24 h-24 md:w-40 md:h-40 object-contain"
          />
        </div>
        <div className="bg-white bg-opacity-70 p-4 sm:p-6 md:p-12 rounded-lg shadow-lg text-center max-w-xs sm:max-w-md md:max-w-xl">
          <h1 className="charm-bold text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Welcome to De La Reina
          </h1>
          <p className="charm-regular font-bold text-base sm:text-lg md:text-xl mb-4">
            De La Reina is a unique fashion brand that celebrates timeless
            vintage style, offering pieces that embody elegance and charm from
            the past. With a personalized style request service, we help you
            bring your vision to life.
          </p>
          <Link
            href="/produk"
            className="px-4 py-2 sm:px-6 sm:py-3 bg-pink-300 text-[#4d2b2b] font-bold rounded hover:bg-pink-400 transition-colors"
          >
            See Products
          </Link>
        </div>
      </section>
      {/* Purchase Instructions */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-pink-50 p-4 sm:p-8 h-auto md:h-[50vh] space-y-4 md:space-y-0">
        <div className="max-w-xs sm:max-w-sm md:max-w-md mb-4 md:mb-0 md:mr-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">
            How to Purchase
          </h2>
          <ol className="list-decimal ml-4 text-base sm:text-lg space-y-2 text-black">
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
        <div className="relative w-40 h-40 sm:w-48 sm:h-48">
          <Image
            src="/dress/dressw.webp"
            alt="De La Reina Product"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
      {/* Catchphrase Section */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-pink-200 p-4 sm:p-8 h-auto md:h-[50vh] text-center md:text-left space-y-4 md:space-y-0">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-4 md:mr-8">
          <Image
            src="/fam.png"
            alt="Vintage Inspiration"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="charm-bold text-lg sm:text-xl md:text-2xl font-bold text-[#5e4d54]">
          Vintage is not just a style but a story waiting to be worn.
        </p>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
