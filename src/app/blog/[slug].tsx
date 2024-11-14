import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ContentfulBlogPost } from "../../../lib/types";
interface BlogPostProps {
  blogPost: ContentfulBlogPost;
}

const BlogPost = ({ blogPost }: BlogPostProps) => {
  return (
    <div>
      <h1>{blogPost.fields.title || "Untitled"}</h1>
      {blogPost.fields.body
        ? documentToReactComponents(blogPost.fields.body)
        : null}
    </div>
  );
};

export default BlogPost;
