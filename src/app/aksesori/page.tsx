"use client";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Accessory = {
  id: number;
  name: string;
  image: string;
  additionalImages: string[];
  description: string;
};

const Accessories = () => {
  const [selectedAccessory, setSelectedAccessory] = useState<Accessory | null>(
    null
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Accessories data with descriptions and additional images
  const aksesori: Accessory[] = [
    {
      id: 1,
      name: "Code: #ARN01",
      image: "/akse/acc12.webp",
      additionalImages: ["/akse/acc12a.webp", "/akse/acc12b.webp"],
      description: "Elegant earrings with flower.",
    },
    {
      id: 2,
      name: "Code: #AMS01",
      image: "/akse/acc8.webp",
      additionalImages: ["/akse/acc8a.webp", "/akse/acc8b.webp"],
      description: "Black mesh net headdress.",
    },
    {
      id: 3,
      name: "Code: #ABC01",
      image: "/akse/acc14.webp",
      additionalImages: ["/akse/acc14a.webp", "/akse/acc14b.webp"],
      description: "Gold bracelets.",
    },
    {
      id: 4,
      name: "Code: #ANL01",
      image: "/akse/acc13.webp",
      additionalImages: ["/akse/acc13a.webp", "/akse/acc13b.webp"],
      description: "Pearl choker necklace.",
    },
    {
      id: 5,
      name: "Code: #AGV01",
      image: "/akse/acc15.webp",
      additionalImages: ["/akse/acc15a.webp", "/akse/acc15b.webp"],
      description: "Vintage woman gloves.",
    },
    {
      id: 6,
      name: "Code: #APR01",
      image: "/akse/acc9.webp",
      additionalImages: ["/akse/acc9a.webp", "/akse/acc9b.webp"],
      description: "White mini bag with pearls.",
    },
    {
      id: 7,
      name: "Code: #ABL01",
      image: "/akse/acc11.webp",
      additionalImages: ["/akse/acc11a.webp", "/akse/acc11b.webp"],
      description: "Delicate belt for your dress.",
    },
    {
      id: 8,
      name: "Code: #AGL01",
      image: "/akse/acc10.webp",
      additionalImages: ["/akse/acc10a.webp", "/akse/acc10b.webp"],
      description: "Vintage sunglasses.",
    },
  ];

  const handleViewDetails = (accessory: Accessory) => {
    setSelectedAccessory(accessory);
  };

  const handleCloseModal = () => {
    setSelectedAccessory(null);
  };

  const handleImageClick = (img: string) => {
    setSelectedImage(img);
  };

  const handleCloseImageModal = () => {
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
          backgroundImage: "url('/heracc1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="bg-white bg-opacity-70 p-12 rounded-lg shadow-lg text-center max-w-xl">
          <h1 className="charm-bold text-4xl font-extrabold mb-4">
            Our Accessories
          </h1>
          <p className="charm-regular text-xl mb-6">
            Browse our collection of stylish accessories, or if you have a
            unique design in mind, feel free to request a custom piece. We are
            here to help you find the perfect accessory or create one just for
            you!
          </p>
        </div>
      </section>

      {/* Divider Line */}
      <div className="border-t-2 border-gray-300 my-6 mx-auto w-3/4"></div>

      {/* Main Content with Background Change */}
      <div
        style={{
          backgroundImage: "url('/backg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Accessories Marketplace Section */}
        <section className="py-12 bg-purple-200 bg-opacity-40">
          <h2 className="charm-bold text-3xl font-extrabold text-center mb-8">
            Available Accessories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
            {aksesori.map((acc) => (
              <div
                key={acc.id}
                className="bg-pink-200 shadow-lg rounded-lg p-4 flex flex-col items-center transition duration-300 ease-in-out hover:bg-pink-300"
              >
                <Image
                  src={acc.image}
                  alt={acc.name}
                  width={200}
                  height={300}
                  className="rounded-lg"
                />
                <h3 className="text-lg font-bold mt-4 mb-2">{acc.name}</h3>
                <button
                  onClick={() => handleViewDetails(acc)}
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
      {selectedAccessory && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">{selectedAccessory.name}</h2>
            <p className="text-sm text-gray-600 mb-4">
              {selectedAccessory.description}
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src={selectedAccessory.image}
                alt={selectedAccessory.name}
                width={200}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="flex justify-start gap-2 mb-4">
              {selectedAccessory.additionalImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Additional ${index + 1}`}
                  width={100}
                  height={150}
                  className="rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(img)}
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

      {/* Modal for Additional Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <Image
              src={selectedImage}
              alt="Selected accessory"
              width={400}
              height={600}
              className="rounded-lg"
            />
            <button
              onClick={handleCloseImageModal}
              className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Accessories;
