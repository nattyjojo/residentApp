import Header from "../components/header";
import MainFooter from "../components/Footer";
export const metadata = {
  title: "about",
  description: "foyer saleh about us page",
};

const About = () => {
  return (
    <>
      <Header />
      <main className="py-larger pt-[5rem]">
        <div className="py-10">
          <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
            <p className="py-larger leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
              nunc non velit ultrices consectetur. Integer quis augue ac libero
              tincidunt commodo. Duis vel dolor vel turpis viverra vehicula ac
              sit amet sem. Curabitur a ipsum nec massa vulputate malesuada vel
              a ex. Phasellus non hendrerit dui. Nullam tincidunt interdum elit,
              ut sodales arcu suscipit nec.
            </p>
            <p className=" leading-relaxed mt-4">
              Suspendisse hendrerit est quis tincidunt eleifend. Phasellus ac
              velit sed ligula malesuada fermentum. Nullam vel posuere est, vel
              fermentum justo. Fusce bibendum gravida orci, ut dignissim elit
              volutpat a. Praesent vel placerat nisl.
            </p>
          </div>
        </div>
      </main>
      <MainFooter />
    </>
  );
};
export default About;
