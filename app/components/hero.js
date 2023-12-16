import LargeButton from "./buttonLarge";
const Hero = () => {
  //const currentTime = currentTime();
  return (
    <h1 className="w-[70%] ml-[15%] text-smallest font-[200] lg:text-big md:text-big">
      Unlock seamless resident management with our all-encompassing software
      platform, tailored for your convenience.
      <div className="mt-[10px] text-small font-bold">
        <LargeButton link={"/about"} content={"Learn More"} />
      </div>
    </h1>
  );
};
export default Hero;
