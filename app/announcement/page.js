import Header from "../components/header";
import MainFooter from "../components/Footer";
import Card from "../components/card";
import SmallButton from "../components/smallButton";
export const metadata = {
  title: "announcement",
  description: "announcement page",
};

export default function Announcement() {
  return (
    <>
      <Header />
      <main className="pt-[8rem]">
        <h1 className="text-center font-bold text-big">hello word</h1>
        <section className="md:flex justify-between lg:mt-large px-small">
          <Card />
          <br></br>
          <Card />
          <br></br>
          <Card />
          <br></br>
          <Card />
          <br></br>
          <Card />
        </section>
        <br></br>
        <div className="text-center">
          <SmallButton content={"Prev"} />
          <SmallButton content={"Next"} />
        </div>
      </main>
      <MainFooter />
    </>
  );
}
