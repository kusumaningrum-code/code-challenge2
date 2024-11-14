import React from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const reviews = [
  {
    name: "Emily R.",
    comment:
      "I am absolutely in love with my vintage dress from De La Reina! The fit is perfect, and the quality is amazing. I felt like a true queen at my event. Thank you!",
  },
  {
    name: "Isabella M.",
    comment:
      "The vintage blouse I ordered is stunning. It is even more beautiful in person! The fabric is high-quality, and the design is so unique. Cannot wait to order more items!",
  },
  {
    name: "Sophia L.",
    comment:
      "I ordered a few accessories from De La Reina, and they add such a classic touch to my outfits. I get so many compliments every time I wear them!",
  },
  {
    name: "Olivia C.",
    comment:
      "This store has the best selection of vintage clothing! I found a one-of-a-kind top that has become my favorite piece in my wardrobe. Love it!",
  },
  {
    name: "Ava S.",
    comment:
      "I was so impressed with the ordering process and how quickly my dress arrived. The style is gorgeous and timeless. Cannot wait to shop here again!",
  },
];

export default function ReviewsPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url(/back.jpg)" }}
    >
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="bg-white bg-opacity-70 p-6 rounded-lg w-full max-w-2xl">
          <h1 className="charm-bold text-3xl font-bold text-center text-pink-700 mb-8">
            Customer Reviews
          </h1>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-80 rounded-lg shadow-md p-6"
              >
                <p className="charm-bold text-2xl text-pink-900">
                  {review.name}
                </p>
                <p className="marck-script-regular font-bold text-xl text-black mt-2">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
