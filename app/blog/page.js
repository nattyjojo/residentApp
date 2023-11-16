"use client";
import Header from "../components/header";
import MainFooter from "../components/Footer";
import BlogCard from "../components/card";
import SmallButton from "../components/smallButton";
import { useEffect } from "react";
import { useState } from "react";
import handleGetPosts from "../lib/handleGetPosts";
import Image from "next/image";
// export const metadata = {
//   title: "blog",
//   description: "announcement page",
// };

export default function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await handleGetPosts();
      if (posts) {
        console.log({ posts: posts });
        setPosts(posts.data);
      }
    };
    fetchPosts();
  }, []);
  if (posts) {
    return (
      <>
        <Header />
        <main className="pt-[8rem]">
          <h1 className="text-center font-bold text-big">RESIDENT BLOG</h1>
          <section className="flex  justify-between flex-wrap ">
            {/* //className="md:flex justify-between lg:mt-large px-small"      className="flex  justify-between flex-wrap flex-[25%] bg-slate-50"*/}
            {posts
              ? posts.map((post, index) => {
                  return post.postType === "post" ? (
                    <BlogCard postData={post} key={index} />
                  ) : null;
                })
              : null}
          </section>
          <br></br>
          {/* <div className="text-center">
            <SmallButton content={"Prev"} />
            <SmallButton content={"Next"} />
          </div> */}
        </main>
        <MainFooter />
      </>
    );
  }
}
