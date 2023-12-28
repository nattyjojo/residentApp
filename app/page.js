"use client";
import Image from "next/image";
import Nav from "./layouts/nav";
import Footer from "./layouts/footer";
import Hero from "./components/hero";
import Slide from "./layouts/slide";
import BlogCard from "./components/card";
import { useEffect } from "react";
import handleGetPosts from "./lib/handleGetPosts";
import { useState } from "react";
import MainFooter from "./components/Footer";
import Header from "./components/header";
import Loading from "./components/loading";
import validateCookie from "./lib/validateCookie";

const Home = () => {
  const [isLoading, setIsloading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [aunousment, setAunousment] = useState(null);

  useEffect(() => {
    const handleFetchPost = async () => {
      const UserIsValid = await validateCookie();

      if (!UserIsValid) {
        const fetchPost = await handleGetPosts("blog");
        if (fetchPost) {
          setPosts(fetchPost.data);
          setIsloading(false);
        }
      }
      if (UserIsValid) {
        const all = await handleGetPosts("all");
        const contentTypePost = [];
        const contentTypeAnu = [];
        all.data.map((postContent) => {
          postContent.postType === "post"
            ? contentTypePost.push(postContent)
            : contentTypeAnu.push(postContent);
        });
        setPosts(contentTypePost);
        setAunousment(contentTypeAnu);
        setIsloading(false);
      }
    };
    handleFetchPost();
  }, []);
  const style = {
    card: "text-center rounded  flex justify-around  p-small  font-bold text-small",
  };
  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading) {
    console.log(posts);
    return (
      <main>
        <Header />
        <section className="p-smallest pt-bigger">
          <section className={style.card}>
            <Hero />
          </section>

          <section className="md:flex md:justify-center gap-10 md:flex-wrap">
            {posts.map((post, index) =>
              index <= 8 ? (
                <BlogCard
                  data={post}
                  index={index}
                  key={index}
                  imageHeight={"100% "}
                />
              ) : null
            )}
          </section>
        </section>
        <section className="text-center rounded p-small flex justify-around font-bold text-big max-h-[80vh] mb-[20px] md:mb-[40px]">
          {posts.length > 0 ? <Slide posts={posts} /> : null}
        </section>
        {aunousment ? (
          <section className="md:flex md:justify-center gap-10 md:flex-wrap">
            {aunousment.map((post, index) =>
              index <= 8 ? (
                <BlogCard
                  data={post}
                  index={index}
                  key={index}
                  textSection={"w-[60%] pl-[10px]"}
                  toFlex={"flex justify-between"}
                  ImageWidth={"w-[40%]"}
                  imageHeight={"100% "}
                />
              ) : null
            )}
          </section>
        ) : null}
        <MainFooter />
      </main>
    );
  }
};
export default Home;
