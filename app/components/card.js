"use client";
import Image from "next/image";
import { useState } from "react";
import localhost from "../lib/host";
import Link from "next/link";
import { useParams } from "next/navigation";

const BlogCard = (postData) => {
  const post = postData.data;
  const postId = postData.data._id;
  const postTittle = postData.data.title.split(" ");

  const [displayContent, setDisplayContent] = useState(false);
  const normalMenuStyle =
    "border p-smallest flex-[25%] m-3  md:max-w-[25vw] text-center rounded shadow-md";
  const paragraphStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
  };
  const blogStyle = `min-w-[90vw]`;
  return (
    <main
      className={`${normalMenuStyle} mb-4 md:mb-0 ${
        postData.data.blog ? blogStyle : ""
      }`}
    >
      <section className={`${postData.toFlex}`}>
        <div
          className={`${postData.ImageWidth} flex justify-around bg-sky-600 max-h-[300px] rounded`}
        >
          <Image
            style={{
              width: "100%",
              height: `${postData.imageHeight}`,
              maxHeight: "250px",
              borderRadius: "10px",
              minHeight: "250px",
            }}
            src={`${localhost}userFile/banner/${post.bannerName}`}
            alt={`${post.title}`}
            height={100}
            width={100}
            crossOrigin={`${localhost}`}
          />
        </div>

        <br></br>
        <div className={`${postData.textSection}`}>
          <h1 className="h-[25px] overflow-hidden font-bold">
            {postTittle.length > 4 && !postData.data.blog
              ? postTittle.slice(0, 3).join(" ")
              : postTittle.join(" ")}
          </h1>
          <div className="flex  justify-between my-5 font-bold text-[.70rem]">
            <p>Posted by: {post.poster}</p>
            <p>Date: {post.date.split("T")[0]}</p>
          </div>
          <p
            style={postData.data.blog ? null : paragraphStyle}
            className="line-clamp  overflow-hidden inline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></p>

          <button
            className={`${
              postData.data.blog ? "hidden" : ""
            } border px-smallest rounded-lg border-b-[4px] m-smallest hover:bg-sky-600 font-bold`}
          >
            <Link
              href={`/${
                postTittle.length > 4
                  ? postTittle.slice(0, 3).join("-")
                  : postTittle
              }/${postId}`}
            >
              Read
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
};
export default BlogCard;
