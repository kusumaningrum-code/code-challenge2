import contentfulClient from "../../../../lib/contentfulClient";
import { Entry } from "contentful";
import { TypeBlogPostSkeleton, TypeBlogPostAsset } from "@/types/blog.types";
import RichText from "@/views/components/richText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const getBlogs = async (
  slug: string
): Promise<Entry<TypeBlogPostSkeleton> | undefined> => {
  try {
    const blogs = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
      content_type: "blogPost",
      "fields.slug[match]": slug,
    });
    return blogs.items[0];
  } catch (error) {
    console.error("Error fetching blog:", error);
    return undefined;
  }
};

export default async function Page({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const blog = await getBlogs(params.slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-600">
          Blog post not found.
        </h1>
      </div>
    );
  }

  const imageUrl =
    (blog.fields.image as TypeBlogPostAsset)?.fields.file.url || "";
  const title = typeof blog.fields.title === "string" ? blog.fields.title : "";
  const body = blog.fields.body;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-shrink-0 w-full lg:w-1/3">
          {imageUrl && (
            <img
              className="w-full h-96 object-contain rounded-lg"
              src={`https:${imageUrl}`}
              alt={title}
            />
          )}
        </div>
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
          <div className="prose lg:prose-xl">
            {body && <RichText document={body as any} />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
