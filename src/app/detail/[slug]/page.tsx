import contentfulClient from "../../../../lib/contentfulClient";
import { TypeBlogPostSkeleton, TypeBlogPostAsset } from "@/types/blog.types";
import RichText from "@/views/components/richText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Fetch blog data using the provided slug
const getBlogs = async (slug: string) => {
  try {
    const blogs = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
      content_type: "blogPost",
      "fields.slug[match]": slug,
    });
    return blogs.items[0];
  } catch (error) {
    console.error("Error fetching blog:", error);
  }
};

// Default async page component for dynamic route
export default async function Page({ params }: { params: { slug: string } }) {
  // Fetch the blog data based on the slug
  const blog = await getBlogs(params.slug);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Blog Detail */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            className="w-full h-96 object-contain rounded-lg"
            src={`https:${
              (blog?.fields.image as TypeBlogPostAsset)?.fields.file.url
            }`}
            alt={blog?.fields.title}
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {blog?.fields.title}
          </h1>
          <div className="prose lg:prose-xl">
            <RichText document={blog?.fields.body} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
