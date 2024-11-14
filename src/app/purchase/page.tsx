import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PurchasePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: "url(/back.jpg)" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Purchase Guide Section */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-pink-700 text-center mb-8 bg-white bg-opacity-80 p-4 rounded-lg w-full max-w-2xl">
          Purchase Guide
        </h1>

        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md max-w-2xl w-full text-gray-800 space-y-6">
          <h2 className="text-2xl font-semibold text-pink-900">
            How to Purchase
          </h2>
          <ol className="list-decimal list-inside space-y-4 pl-4">
            <li>
              <span className="font-semibold">
                Browse our product collection
              </span>
              and copy the code of your preferred product or create a unique
              style request.
            </li>
            <li>
              <span className="font-semibold">Click the Purchase button</span>{" "}
              to start your order.
            </li>
            <li>
              <span className="font-semibold">
                Select Contact Us on WhatsApp
              </span>{" "}
              to finalize your purchase or request a custom design directly with
              our team.
            </li>
          </ol>

          <div className="flex gap-4 mt-6">
            <a
              href="https://wa.me/6287734768414"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              Contact Us on WhatsApp
            </a>
            <a
              href="mailto:panjisardi8@gmail.com"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Contact Us via Email
            </a>
          </div>
        </div>
      </main>
      {/* Divider Line */}
      <div className="w-full h-3 bg-white"></div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 w-full mt-auto">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex justify-between mb-6">
            <div className="flex gap-6">
              <Link
                href="#"
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
}
