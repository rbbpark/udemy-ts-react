import { useState, useEffect, type ReactNode } from "react";
import { get } from "./utils/https.ts";
import { type BlogPost } from "./components/BlogPosts.tsx";
import fetchingImg from "./assets/data-fetching.png";
import BlogPosts from "./components/BlogPosts.tsx";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  async function fetchPosts() {
    const data = (await get("https://jsonplaceholder.typicode.com/posts")) as RawDataBlogPost[];
    const blogPosts: BlogPost[] = data.map((rawPost) => {
      return {
        id: rawPost.id,
        title: rawPost.title,
        text: rawPost.body,
      };
    });
    setFetchedPosts(blogPosts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  let content: ReactNode;
  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img
        src={fetchingImg}
        alt="abstract image depicting blog posts"
      />
      {content}
    </main>
  );
}

export default App;
