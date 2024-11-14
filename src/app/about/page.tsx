"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
const AboutUsPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* About Us Section */}
      <main className="flex-grow flex flex-col items-center justify-center p-8 w-full">
        <h1 className="text-4xl font-bold text-pink-700 text-center mb-8">
          About De La Reina
        </h1>

        {/* Who We Are Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-12 gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-pink-900">Who We Are</h2>
            <p className="text-lg">
              De La Reina is a store specializing in women vintage clothing,
              offering a curated collection of timeless pieces. We provide both
              ready stock and custom orders, bringing vintage fashion to life.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/about/about3.webp"
              alt="De La Reina Clothing"
              width={600}
              height={400}
            />
          </div>
        </div>
        <div className="border-t-2 border-gray-300 my-6 mx-auto w-3/4"></div>
        {/* Custom Orders & Consultation Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-12 gap-8">
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/about/about1.webp"
              alt="Custom Orders & Consultation"
              width={600}
              height={400}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-pink-900">
              Custom Orders & Consultation
            </h2>
            <p className="text-lg">
              We offer custom orders tailored to your preferences. Our team will
              assist with consultations to create the perfect vintage piece that
              matches your style.
            </p>
          </div>
        </div>
        <div className="border-t-2 border-gray-300 my-6 mx-auto w-3/4"></div>
        {/* Team Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-12 gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-pink-900">Our Team</h2>
            <p className="text-lg">
              Our experienced team is ready to help with custom requests and
              provide vintage fashion guidance.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/about/about2.jpg"
              alt="Our Team"
              width={600}
              height={400}
            />
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 w-full">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex justify-between mb-6">
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-lg font-bold text-white hover:text-pink-300"
              >
                Home
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
    </div>
  );
};
export default AboutUsPage;
