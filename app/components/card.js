"use client";
import Image from "next/image";
import { useState } from "react";
import localhost from "../lib/host";

const BlogCard = (postData, index) => {
  const post = postData.postData;
  const [displayContent, setDisplayContent] = useState(false);
  const dropDownMenustyle =
    " bg-[#292626] bg-[rgba(0,0,0,1)]  font-bold flex flex-col justify-center  text-center text-big left-0 absolute w-[98.70vw] h-[100vh] top-20 rounded px-smallest";
  const normalMenuStyle =
    "border p-smallest flex-[25%] m-3  text-center rounded shadow-md";
  const paragraphStyle = {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main
      className={`${normalMenuStyle} ${
        displayContent ? dropDownMenustyle : ""
      } mb-4 md:mb-0`}
      key={index}
    >
      {displayContent ? (
        <button
          onClick={() => setDisplayContent(!displayContent)}
          className="ml-[95%] absolute top-1 right-3 hover:text-sky-600 font-bold text-big"
        >
          X
        </button>
      ) : null}
      <div className="flex justify-around bg-sky-600 rounded">
        <Image
          style={{ width: "100%", borderRadius: "10px" }}
          src={`${localhost}banner/${post.bannerName}`}
          alt={`${post.title}`}
          height={100}
          width={100}
          crossOrigin={`${localhost}admin`}
        />
      </div>

      <br></br>
      <h1>{post.title}</h1>
      <div className="flex justify-between my-5 font-bold text-[.70rem]">
        <p>Posted by: {post.poster}</p>
        <p>Date: {post.date.split("T")[0]}</p>
      </div>
      <p
        style={paragraphStyle}
        className="line-clamp  overflow-hidden inline"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></p>
      {!displayContent ? (
        <button
          className="border px-smallest rounded-lg border-b-[4px] m-smallest hover:bg-sky-600 font-bold"
          onClick={() => {
            setDisplayContent(!displayContent);
            scrollToTop();
          }}
        >
          More
        </button>
      ) : null}
    </main>
  );
};
export default BlogCard;
//
