"use client";
import Image from "next/image";
import { useState } from "react";
import localhost from "../lib/host";

const BlogCard = (postData, index) => {
  const post = postData.data;
  const [displayContent, setDisplayContent] = useState(false);
  const dropDownMenustyle =
    " bg-[#292626] bg-[rgba(0,0,0,1)]  font-bold flex flex-col justify-center  text-center text-big left-0 absolute w-[98.70vw] h-[100vh] top-20 rounded px-smallest";
  const normalMenuStyle =
    "border p-smallest flex-[25%] m-3  md:max-w-[25vw] text-center rounded shadow-md";
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
      <section className={`${postData.toFlex}`}>
        <div
          className={`${postData.ImageWidth} flex justify-around bg-sky-600 max-h-[300px]   rounded`}
        >
          <Image
            style={{
              width: "100%",
              height: `${postData.imageHeight}`,
              maxHeight: "250px",
              borderRadius: "10px",
            }}
            src={`${localhost}files/banner/${post.bannerName}`}
            alt={`${post.title}`}
            height={100}
            width={100}
            borderRadius={"10px"}
            crossOrigin={`${localhost}`}
            objectFit="cover"
          />
        </div>

        <br></br>
        <div className={`${postData.textSection}`}>
          <h1 className="max-h-[30px] overflow-hidden font-bold">
            {post.title}
          </h1>
          <div className="flex  justify-between my-5 font-bold text-[.70rem]">
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
              Read
            </button>
          ) : null}
        </div>
      </section>
    </main>
  );
};
export default BlogCard;
// textSection="w-[60%] pl-[10px]"  toFlex="flex"
