import { Document } from "@contentful/rich-text-types";
import { EntrySkeletonType } from "contentful";

export interface PostFields {
  title: string;
  body: Document;
  slug: string;
}

export interface ContentfulBlogPost extends EntrySkeletonType {
  contentTypeId: "blogPost";
  fields: PostFields;
}

export interface ContentfulBlogPost {
  title: string;
  body: Document;
  slug: string;
}

export type ContentfulEntry<T> = {
  sys: {
    id: string;
    contentType: { sys: { id: string } };
  };
  fields: T;
};
