import Link from "next/link";
import Image from "next/image";
import profile from "../assets/profile.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerButton from "../clientsComponents/hamburger";
import { MdOutlineRealEstateAgent } from "react-icons/md";
const NavHamburger = () => {
  return (
    <nav className="flex justify-between fixed  top-0 left-0 py-smallest px-smallest border-b w-[100%] bg-black ">
      <Link href={"/"}>
        <h1 className="text-[50px] hover:text-blue-900 font-bold" title="home">
          <MdOutlineRealEstateAgent />
        </h1>
      </Link>
      <HamburgerButton />
      {/* <button className="text-small  ">
        <GiHamburgerMenu />
      </button> */}
    </nav>
  );
};
export default NavHamburger;
