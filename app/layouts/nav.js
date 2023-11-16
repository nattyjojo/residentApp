import Link from "next/link";
import Image from "next/image";
import profile from "../assets/profile.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerButton from "../clientsComponents/hamburger";
const NavHamburger = () => {
  return (
    <nav className="flex justify-between fixed  top-0 left-0 py-smallest px-smallest border-b w-[100%] bg-black ">
      <Link href={"/"}>
        <Image src={profile} alt="foryer saleh logo" width={50} height={50} />
      </Link>
      <HamburgerButton />
      {/* <button className="text-small  ">
        <GiHamburgerMenu />
      </button> */}
    </nav>
  );
};
export default NavHamburger;
