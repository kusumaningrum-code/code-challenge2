export const fetchBlogPosts = async () => {
  const spaceId = process.env.qi2vde3zvt3z;
  const accessToken = process.env.cZw2WkcuA3TLQLRH4EQqdiCZzwKrESrGF4nCXPTZbTc;

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data from Contentful");
    }

    const data = await response.json();
    console.log("Fetched data:", data);

    return data.items || [];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};
