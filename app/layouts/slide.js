import { FcNext, FcPrevious } from "react-icons/fc";
import Image from "next/image";
const Slide = (anuonsment) => {
  const Bgsrc =
    "https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52379.jpg?w=996&t=st=1696240002~exp=1696240602~hmac=624c76a932a7d539958ad149cac228887193dd9942fd4236fff62941f13720f2";

  return (
    <div
      style={{
        backgroundImage: `url(${Bgsrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "fit-content",
      }}
      className=" relative text-white rounded "
    >
      <button className="z-1 p-smallest rounded-full border border-black  absolute left-10 top-[45%]">
        <FcPrevious />
      </button>
      <section>
        <h2 className="">New Anounsments</h2>
        <p className="text-gray">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </section>
      <button
        className=" p-smallest z-1 rounded-full border  border-black
       absolute right-10 top-[45%]"
      >
        <FcNext />
      </button>
    </div>
  );
};
export default Slide;
