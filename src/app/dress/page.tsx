"use client";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
type Dress = {
  id: number;
  name: string;
  image: string;
  additionalImages: string[];
  description: string;
};

const Dresses = () => {
  const [selectedDress, setSelectedDress] = useState<Dress | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const dresses: Dress[] = [
    {
      id: 1,
      name: "Code: #DWH01",
      image: "/dress/dressw.webp",
      additionalImages: [
        "/dress/dresswa.webp",
        "/dress/dresswb.webp",
        "/dress/dresswc.webp",
      ],
      description: "Elegant white dress perfect for any formal event.",
    },
    {
      id: 2,
      name: "Code: #DBB01",
      image: "/dress/dress2.webp",
      additionalImages: [
        "/dress/dress2a.webp",
        "/dress/dress2b.webp",
        "/dress/dress2c.webp",
      ],
      description: "A stunning baby blue dress designed for evening occasions.",
    },
    {
      id: 3,
      name: "Code: #DWH02",
      image: "/dress/dress3.webp",
      additionalImages: [
        "/dress/dress3a.webp",
        "/dress/dress3b.webp",
        "/dress/dress3c.webp",
      ],
      description: "A luxurious white dress.",
    },
    {
      id: 4,
      name: "Code: #DBL01",
      image: "/dress/dress4.webp",
      additionalImages: [
        "/dress/dress4a.webp",
        "/dress/dress4b.webp",
        "/dress/dress4c.webp",
      ],
      description: "Beautiful black dress.",
    },
    {
      id: 5,
      name: "Code: #DBL02",
      image: "/dress/dress5.webp",
      additionalImages: [
        "/dress/dress5a.webp",
        "/dress/dress5b.webp",
        "/dress/dress5c.webp",
      ],
      description: "A gorgeous black dress, designed for formal occasions.",
    },
    {
      id: 6,
      name: "Code: #DBB02",
      image: "/dress/dress9.webp",
      additionalImages: [
        "/dress/dress9a.webp",
        "/dress/dress9b.webp",
        "/dress/dress9c.webp",
      ],
      description:
        "Floral blue dress, perfect for a cocktail party or semi-formal event.",
    },
    {
      id: 7,
      name: "Code: #DPN01",
      image: "/dress/dress7.webp",
      additionalImages: [
        "/dress/dress7a.webp",
        "/dress/dress7b.webp",
        "/dress/dress7c.webp",
      ],
      description: "A pink dress with lacey design.",
    },
    {
      id: 8,
      name: "Code: #DGR01",
      image: "/dress/dress8.webp",
      additionalImages: [
        "/dress/dress8a.webp",
        "/dress/dress8b.webp",
        "/dress/dress8c.webp",
      ],
      description: "A graceful green dress with velvet material.",
    },
  ];

  const handleViewDetails = (dress: Dress) => {
    setSelectedDress(dress);
  };

  const handleCloseModal = () => {
    setSelectedDress(null);
  };

  const handleCloseImagePopup = () => {
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
          backgroundImage: "url('/herdress1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="bg-white bg-opacity-70 p-12 rounded-lg shadow-lg text-center max-w-xl">
          <h1 className="charm-bold text-4xl font-extrabold mb-4">
            Our Dresses
          </h1>
          <p className="charm-regular text-xl mb-6">
            Discover our stunning collection of dresses, crafted to suit every
            style and occasion. Browse through our selection to find your
            perfect fit, or if you have something unique in mind, feel free to
            request a custom design below. We are here to make your fashion
            dreams a reality!
          </p>
        </div>
      </section>

      {/* Divider Line */}
      <div className="border-t-2 border-gray-300 my-6 mx-auto w-3/4"></div>

      {/* Dress Marketplace Section */}
      <div
        className="py-12"
        style={{
          backgroundImage: "url('/backg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="py-12 bg-purple-100 bg-opacity-40">
          <h2 className="text-2xl font-bold text-center mb-8">
            Available Dresses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
            {dresses.map((dress) => (
              <div
                key={dress.id}
                className="bg-pink-200 shadow-lg rounded-lg p-4 flex flex-col items-center transition duration-300 ease-in-out hover:bg-pink-300"
              >
                <Image
                  src={dress.image}
                  alt={dress.name}
                  width={200}
                  height={300}
                  className="rounded-lg"
                />
                <h3 className="text-lg font-bold mt-4 mb-2">{dress.name}</h3>
                <button
                  onClick={() => handleViewDetails(dress)}
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
      {selectedDress && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">{selectedDress.name}</h2>
            <p className="text-sm text-gray-600 mb-4">
              {selectedDress.description}
            </p>

            <div className="flex justify-center mb-4">
              <Image
                src={selectedDress.image}
                alt={selectedDress.name}
                width={200}
                height={300}
                className="rounded-lg"
              />
            </div>

            <div className="flex justify-between gap-2 mb-4">
              {selectedDress.additionalImages.map((img, index) => (
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

      {/* Image Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-lg">
            <Image
              src={selectedImage}
              alt="Selected Dress View"
              width={400}
              height={600}
              className="rounded-lg"
            />
            <button
              onClick={handleCloseImagePopup}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600"
            >
              Close Image
            </button>
          </div>
        </div>
      )}

      {/* Size Guide Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Size Guide</h2>
          <p className="text-lg">
            Our dresses are designed to fit a range of body shapes and sizes.
            Refer to our size guide below to find your perfect fit.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">Size</th>
                <th className="px-4 py-2 border">Bust</th>
                <th className="px-4 py-2 border">Waist</th>
                <th className="px-4 py-2 border">Hip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border text-center">XS</td>
                <td className="px-4 py-2 border text-center">80-84</td>
                <td className="px-4 py-2 border text-center">60-64</td>
                <td className="px-4 py-2 border text-center">86-90</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">S</td>
                <td className="px-4 py-2 border text-center">84-88</td>
                <td className="px-4 py-2 border text-center">64-68</td>
                <td className="px-4 py-2 border text-center">90-94</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">M</td>
                <td className="px-4 py-2 border text-center">88-92</td>
                <td className="px-4 py-2 border text-center">68-72</td>
                <td className="px-4 py-2 border text-center">94-98</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">L</td>
                <td className="px-4 py-2 border text-center">92-96</td>
                <td className="px-4 py-2 border text-center">72-76</td>
                <td className="px-4 py-2 border text-center">98-102</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">XL</td>
                <td className="px-4 py-2 border text-center">96-100</td>
                <td className="px-4 py-2 border text-center">76-80</td>
                <td className="px-4 py-2 border text-center">102-106</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dresses;
