"use client";
import BlogCard from "@/app/components/card";
import { useParams } from "next/navigation";
import Header from "@/app/components/header";
import MainFooter from "@/app/components/Footer";
import { useEffect, useState } from "react";
import getSinglePost from "@/app/lib/getSinglepost";
import Loading from "@/app/components/loading";
// export const metadata = {
//   title: "about",
//   description: "ResidentApp about us page",
// };

const Post = () => {
  const [post, setPost] = useState();
  const postID = useParams().id;

  useEffect(() => {
    const handlePost = async () => {
      const post = await getSinglePost(postID);
      if (post) {
        setPost(post);
      }
    };
    handlePost();
  }, []);
  if (!post) {
    return <Loading />;
  }
  if (post) {
    post.data.blog = true;
    return (
      <>
        <Header />
        <main className=" pt-[9%] flex justify-around">
          <BlogCard data={post.data} blog={{ data: true }} />
        </main>
        <MainFooter />
      </>
    );
  }
};
//
export default Post;
