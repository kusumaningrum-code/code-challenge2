import contentfulClient from "../../../../lib/contentfulClient";
import { TypeBlogPostSkeleton, TypeBlogPostAsset } from "@/types/blog.types";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const getBlogs = async () => {
  try {
    const blogs = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
      content_type: "blogPost",
    });
    return blogs;
  } catch (error) {
    console.log(error);
  }
};

export default async function Blog() {
  const blogs = await getBlogs();
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Blog List */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-semibold text-center mb-8">Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs &&
            blogs.items?.map((blog, idx) => (
              <Link key={idx} href={`/detail/${blog.fields.slug}`}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    className="w-full h-56 object-contain"
                    src={`https:${
                      (blog.fields.image as TypeBlogPostAsset)?.fields.file.url
                    }`}
                    alt={blog.fields.title}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {blog.fields.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3">
                      {documentToReactComponents(blog.fields.body)}{" "}
                      {/* Render the Rich Text */}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
