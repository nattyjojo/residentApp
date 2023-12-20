import { FcNext, FcPrevious } from "react-icons/fc";
import { useState } from "react";
import localhost from "../lib/host";
import Image from "next/image";
const Slide = (post) => {
  let [current, setCurrent] = useState(0);
  const postContent = post.posts;
  return (
    <div
      style={{
        backgroundImage: `url(${localhost}files/userFiles/banner/${postContent[current].bannerName})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center",
        backgroundPositionX: "center",
        backgroundSize: "400px 300px",
        objectFit: "cover",
        border: "2px solid red",
        margin: "20px 0",
      }}
      className=" flex text-white rounded "
    >
      <button
        onClick={() => (current !== 0 ? setCurrent((current -= 1)) : null)}
        className=" p-smallest rounded-full text-[40px]  md:text-[100px]"
      >
        <FcPrevious />
      </button>
      <section>
        <h2 className="h-[50px] overflow-hidden">
          {postContent[current].title}{" "}
        </h2>
        <p className="text-gray  h-[20vh] md:h-[40vh] overflow-hidden">
          {postContent[current].content}
        </p>
      </section>

      <button
        onClick={() => {
          current !== postContent.length - 1
            ? setCurrent((current += 1))
            : setCurrent(current);
        }}
        className=" p-smallest rounded-full text-[40px]  md:text-[100px]"
      >
        <FcNext />
      </button>
    </div>
  );
};
export default Slide;
