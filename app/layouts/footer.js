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
        <h6 className="mb-smallest font-bold">Contact</h6>
        <p>
          <GiRotaryPhone className="inline mr-smallest" />
          +3246-5930‑33
        </p>

        <p>
          <MdMarkEmailUnread className="inline mr-smallest" />
          chimeziejohn731@gmail.com
        </p>

        <p>
          <FcHome className="inline mr-smallest" />
          Brussels, Belgium
        </p>
      </section>

      <section>
        <h1 className="mb-smallest font-bold">Refrences</h1>
        <ul>
          <ListLink
            href="https://nattyjojo.github.io/portfolio/"
            content="Portfolio"
            target="_blank"
          />
          <ListLink
            href="https://whimsical-melomakarona-344a50.netlify.app/"
            content="Beqanda"
          />
          <ListLink href="https://becode.org/" content="Becode" />
          <ListLink
            href="https://linkedin.com/in/john-chimezie-72b36a280"
            content="Linkedin"
          />
          <ListLink
            href="https://github.com/nattyjojo?tab=repositories"
            content="Repo"
          />
          <ListLink href="/" content="End" />
        </ul>
      </section>
    </main>
  );
};
export default Footer;
