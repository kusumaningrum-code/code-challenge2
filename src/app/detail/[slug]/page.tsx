import contentfulClient from "../../../../lib/contentfulClient";
import { Entry } from "contentful";
import { TypeBlogPostSkeleton, TypeBlogPostAsset } from "@/types/blog.types";
import { Document } from "@contentful/rich-text-types"; // Import Contentful's Document type
import RichText from "@/views/components/richText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Type for the Params
type Params = Promise<{ slug: string }>;

// Type guard to check if an object contains the "document" field
function isDocumentObject(body: unknown): body is { document: Document } {
  return typeof body === "object" && body !== null && "document" in body;
}

// Extract Document from body safely
const extractDocument = (body: unknown): Document | undefined => {
  if (isDocumentObject(body)) {
    return body.document; // Return the document if the object has the document field
  }

  // If body is already a Document or if the body doesn't have the document field, return it
  return body as Document | undefined;
};

// Fetch Blog Post by Slug
const getBlog = async (
  slug: string
): Promise<Entry<TypeBlogPostSkeleton> | undefined> => {
  try {
    const blogs = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
      content_type: "blogPost",
      "fields.slug[match]": slug,
    });

    return blogs.items[0]; // Return the first item if available
  } catch (error) {
    console.error("Error fetching blog:", error);
    return undefined;
  }
};

// Metadata generation function
export async function generateMetadata({ params }: { params: Params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const blog = await getBlog(slug);

  return {
    title: blog ? blog.fields.title : "Blog Not Found", // Set metadata title
  };
}

// Main Page component
export default async function Page({
  params,
}: {
  params: Params;
}): Promise<JSX.Element> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const blog = await getBlog(slug);

  // Handle case where blog post is not found
  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-600">
          Blog post not found.
        </h1>
      </div>
    );
  }

  // Extract the image URL and title from the blog data
  const imageUrl =
    (blog.fields.image as TypeBlogPostAsset)?.fields.file.url || "";
  const title = typeof blog.fields.title === "string" ? blog.fields.title : "";
  const body = blog.fields.body; // Content field

  // Use the extractDocument function to handle both cases (object with document or Document directly)
  const documentBody: Document | undefined = extractDocument(body);

  // If documentBody is missing, show an error message
  if (!documentBody) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-600">
          Invalid blog post content.
        </h1>
      </div>
    );
  }

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
            <RichText document={documentBody} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
