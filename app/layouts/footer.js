import ListLink from "./dropDownMenu";
import { GiRotaryPhone } from "react-icons/gi";
import { FcHome } from "react-icons/fc";
import { MdMarkEmailUnread } from "react-icons/md";
const Footer = () => {
  const style = {};
  return (
    <main className="flex justify-between text-center my-small  rounded">
      <section className="ml-2">
        <h6 className="mb-smallest font-bold">Sitemap</h6>
        <ul className="text-left">
          <ListLink href="/" content="Home" />
          <ListLink href="/blog" content="Blog" />
          <ListLink href="/about" content="About Us" />
          <ListLink href="/contact" content="Contact" />
          <ListLink href="/login" content="Login" />
          <ListLink href="/register" content="Register" />
        </ul>
      </section>
      <section className="hidden sm:block">
        <h6 className="mb-smallest font-bold">Contact Us</h6>
        <p>
          <GiRotaryPhone className="inline mr-smallest" />
          +1233444555
        </p>

        <p>
          <MdMarkEmailUnread className="inline mr-smallest" />
          yourmail@gmail.com
        </p>

        <p>
          <FcHome className="inline mr-smallest" />
          your address, city
        </p>
      </section>

      <section>
        <h1 className="mb-smallest font-bold">refrences</h1>
        <ul>
          <ListLink href="/" content="Sitemap" />
          <ListLink href="/blog" content="Blog" />
          <ListLink href="/about" content="About Us" />
          <ListLink href="/contact" content="Contact" />
          <ListLink href="/login" content="Login" />
          <ListLink href="/register" content="Register" />
        </ul>
      </section>
    </main>
  );
};
export default Footer;
