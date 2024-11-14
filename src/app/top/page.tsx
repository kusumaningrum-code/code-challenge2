"use client";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Top = {
  id: number;
  name: string;
  image: string;
  additionalImages: string[];
  description: string;
};

const TopPage = () => {
  const [selectedTop, setSelectedTop] = useState<Top | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tops: Top[] = [
    {
      id: 1,
      name: "Code: #DWH01",
      image: "/top/top1.webp",
      additionalImages: [
        "/top/top1a.webp",
        "/top/top1b.webp",
        "/top/top1c.webp",
      ],
      description: "A stylish white top with ribbon.",
    },
    {
      id: 2,
      name: "Code: #DBB01",
      image: "/top/top2.webp",
      additionalImages: [
        "/top/top2a.webp",
        "/top/top2b.webp",
        "/top/top2c.webp",
      ],
      description: "Elegant black top with a modern cut.",
    },
    {
      id: 3,
      name: "Code: #DWH02",
      image: "/top/top3.webp",
      additionalImages: [
        "/top/top3a.webp",
        "/top/top3b.webp",
        "/top/top3c.webp",
      ],
      description: "A vintage white crop top.",
    },
    {
      id: 4,
      name: "Code: #DBL01",
      image: "/top/top4.webp",
      additionalImages: [
        "/top/top4a.webp",
        "/top/top4b.webp",
        "/top/top4c.webp",
      ],
      description: "Light brown shirt, perfect for formal occasion.",
    },
    {
      id: 5,
      name: "Code: #DBL02",
      image: "/top/top5.webp",
      additionalImages: [
        "/top/top5a.webp",
        "/top/top5b.webp",
        "/top/top5c.webp",
      ],
      description: "A black crop top with cherry patterns.",
    },
    {
      id: 6,
      name: "Code: #DBB02",
      image: "/top/top6.webp",
      additionalImages: [
        "/top/top6a.webp",
        "/top/top6b.webp",
        "/top/top6c.webp",
      ],
      description: "Chiffon pink blouse.",
    },
    {
      id: 7,
      name: "Code: #DPN01",
      image: "/top/top7.webp",
      additionalImages: [
        "/top/top7a.webp",
        "/top/top7b.webp",
        "/top/top7c.webp",
      ],
      description: "A vintage sailor top, perfect for summer days.",
    },
    {
      id: 8,
      name: "Code: #DGR01",
      image: "/top/top8.webp",
      additionalImages: [
        "/top/top8a.webp",
        "/top/top8b.webp",
        "/top/top8c.webp",
      ],
      description: "Vintage white tank-top to combine with your skirt.",
    },
  ];

  const handleViewDetails = (top: Top) => {
    setSelectedTop(top);
  };

  const handleCloseModal = () => {
    setSelectedTop(null);
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-gray-900"
        style={{
          backgroundImage: "url('/hertop.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="bg-white bg-opacity-70 p-12 rounded-lg shadow-lg text-center max-w-xl">
          <h1 className="charm-bold text-4xl font-extrabold mb-4">Our Tops</h1>
          <p className="charm-regular text-xl mb-6">
            Explore our beautiful collection of tops, designed to enhance your
            unique style.
          </p>
        </div>
      </section>

      {/* Divider Line */}
      <div className="border-t-2 border-gray-300 my-6 mx-auto w-3/4"></div>

      {/* Content Section */}
      <div
        style={{
          backgroundImage: "url('/backg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="py-12 bg-purple-100 bg-opacity-40">
          <h2 className="text-2xl font-bold text-center mb-8">
            Available Tops
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
            {tops.map((top) => (
              <div
                key={top.id}
                className="bg-pink-200 shadow-lg rounded-lg p-4 flex flex-col items-center transition duration-300 ease-in-out hover:bg-pink-300"
              >
                <Image
                  src={top.image}
                  alt={top.name}
                  width={200}
                  height={300}
                  className="rounded-lg"
                />
                <h3 className="text-lg font-bold mt-4 mb-2">{top.name}</h3>
                <button
                  onClick={() => handleViewDetails(top)}
                  className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 mt-auto"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal for Viewing Details */}
      {selectedTop && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">{selectedTop.name}</h2>
            <p className="text-sm text-gray-600 mb-4">
              {selectedTop.description}
            </p>

            <div className="flex justify-center mb-4">
              <Image
                src={selectedTop.image}
                alt={selectedTop.name}
                width={200}
                height={300}
                className="rounded-lg"
              />
            </div>

            <div className="flex justify-between gap-2 mb-4">
              {selectedTop.additionalImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Additional ${index + 1}`}
                  width={100}
                  height={150}
                  className="rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            <button
              onClick={handleCloseModal}
              className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Popup for Selected Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-lg">
            <Image
              src={selectedImage}
              alt="Selected"
              width={400}
              height={600}
              className="rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-full"
            >
              Close Image
            </button>
          </div>
        </div>
      )}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Size Guide</h2>
          <p className="text-lg">
            Our tops are designed to fit a range of body shapes and sizes. Refer
            to our size guide below to find your perfect fit.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">Size</th>
                <th className="px-4 py-2 border">Bust</th>
                <th className="px-4 py-2 border">Waist</th>
                <th className="px-4 py-2 border">Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border text-center">XS</td>
                <td className="px-4 py-2 border text-center">80-84 cm</td>
                <td className="px-4 py-2 border text-center">60-64 cm</td>
                <td className="px-4 py-2 border text-center">55 cm</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">S</td>
                <td className="px-4 py-2 border text-center">84-88 cm</td>
                <td className="px-4 py-2 border text-center">64-68 cm</td>
                <td className="px-4 py-2 border text-center">57 cm</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">M</td>
                <td className="px-4 py-2 border text-center">88-92 cm</td>
                <td className="px-4 py-2 border text-center">68-72 cm</td>
                <td className="px-4 py-2 border text-center">59 cm</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">L</td>
                <td className="px-4 py-2 border text-center">92-96 cm</td>
                <td className="px-4 py-2 border text-center">72-76 cm</td>
                <td className="px-4 py-2 border text-center">61 cm</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">XL</td>
                <td className="px-4 py-2 border text-center">96-100 cm</td>
                <td className="px-4 py-2 border text-center">76-80 cm</td>
                <td className="px-4 py-2 border text-center">63 cm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TopPage;
