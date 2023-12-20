import LargeButton from "./buttonLarge";
const Hero = () => {
  return (
    <section className="">
      <h1 className="text-smallest md:text-big pt-[50%]  md:font-[300] font-[300] whitespace-nowrap overflow-hidden">
        Resident Management
        <i className="inline text-smallest font-[200]" /> !<i />
        <br></br>
        Seamless with Our All-encompassing Software <br></br> platform, tailored
        for Your convenience.
      </h1>
      <div className="mt-[15px] pb-[20%] text-smallest md:text-small  font-bold">
        <LargeButton link={"/about"} content={"Learn More"} />
      </div>
    </section>
  );
};
export default Hero;
