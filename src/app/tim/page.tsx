"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface Person {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
  location: {
    city: string;
    country: string;
  };
  email: string;
  phone: string;
}

interface Data {
  results: Person[];
}

const Tim = () => {
  const [data, setData] = useState<Data>({ results: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=3"); // 3 random users
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/back.jpg')" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Team Section */}
      <section className="py-16">
        {/* "Meet Our Team" Card */}
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg mb-12 max-w-4xl mx-auto text-center">
          <h1 className="charm-bold text-4xl font-extrabold text-[#5e4d54]">
            Meet Our Team
          </h1>
          <p className="charm-regular text-xl text-gray-600 mt-4">
            Our dedicated and talented team members who make it all happen.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 sm:overflow-x-auto sm:justify-center sm:space-x-6 md:space-x-8">
          {data.results.map((person, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg w-72 mx-auto sm:w-72 sm:mx-0 mb-8 sm:mb-0 text-center"
            >
              {/* Profile Picture */}
              <Image
                src={person.picture.medium}
                alt={`${person.name.first} ${person.name.last}`}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              {/* Name and Role */}
              <h2 className="text-xl font-semibold text-[#5e4d54]">
                {person.name.first} {person.name.last}
              </h2>
              <p className="text-lg text-gray-600">Role: Web Developer</p>

              {/* Location */}
              <p className="text-gray-600">
                {person.location.city}, {person.location.country}
              </p>
              <p className="text-gray-400">{person.email}</p>
              <p className="text-gray-400">{person.phone}</p>

              {/* Contact Button */}
              <div className="mt-4">
                <Link
                  href={`mailto:${person.email}`}
                  className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tim;
