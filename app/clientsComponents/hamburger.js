"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import ListLink from "../layouts/dropDownMenu";
import { CgClose } from "react-icons/cg";
import validateCookie from "../lib/validateCookie";
import { useEffect } from "react";
import { useState } from "react";
import { redirect, usePathname } from "next/navigation";
import logOut from "../lib/logOut";

const HamburgerButton = (children) => {
  const [isValid, setIsvalid] = useState(null);
  const [userType, setUserType] = useState(null);
  useEffect(() => {
    const isUser = async () => {
      const validateUserCookie = await validateCookie();
      if (validateUserCookie) {
        setIsvalid(!isValid);
        const userType = JSON.parse(localStorage.getItem("userType"));
        setUserType(userType.userType);
      }
    };

    isUser();
  }, []);

  const currentPath = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const dropDownMenustyle =
    " bg-[#292626] bg-[rgba(0,0,0,1)]  border font-bold flex flex-col justify-center  text-center text-big left-0 absolute w-[100vw] h-[100vh] top-20 rounded px-smallest";
  const normalMenuStyle = "flex justify-between ";
  const handleButton = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="z-10  font-bold pt-[20px]">
      <button onClick={() => handleButton()} className="text-small sm:hidden">
        {isVisible ? (
          <GiHamburgerMenu
            className="hover:text-blue-900 font-bold"
            title="menu"
          />
        ) : (
          <CgClose className="text-blue-900 font-bold" title="close" />
        )}
      </button>

      <ul className={isVisible ? "hidden" : dropDownMenustyle}>
        <ListLink
          href={"/blog"}
          content={"BLOG"}
          border={currentPath === "/blog" ? "border-b text-blue-500 " : " "}
        />

        <ListLink
          href={"/contact"}
          content={"Contact"}
          border={currentPath === "/contact" ? "border-b text-blue-500 " : " "}
        />

        <ListLink
          href={"/about"}
          content={"About"}
          border={currentPath === "/about" ? "border-b text-blue-500 " : ""}
        />
        {!isValid ? (
          <ListLink
            href={"/register"}
            content={"Register"}
            border={
              currentPath === "/register" ? "border-b text-blue-500 " : ""
            }
          />
        ) : (
          <ListLink
            href={`${"/" + userType}`}
            content={"DashBoard"}
            border={
              currentPath === `${"/" + userType}`
                ? "border-b text-blue-500 "
                : ""
            }
          />
        )}
        {isValid ? (
          <div
            onClick={() => {
              logOut();
            }}
          >
            <ListLink
              href={"/"}
              content={"Logout"}
              border={
                currentPath === "/login" ? "border-b text-blue-500 " : " "
              }
            />
          </div>
        ) : (
          <ListLink
            href={"/login"}
            content={"Login"}
            border={currentPath === "/login" ? "border-b text-blue-500 " : " "}
          />
        )}
      </ul>
      <ul className="hidden sm:flex ">
        <ListLink
          href={"/blog"}
          content={"BLOG"}
          border={currentPath === "/blog" ? "border-b text-blue-500 " : " "}
        />
        <ListLink
          href={"/contact"}
          content={"Contact"}
          border={currentPath === "/contact" ? "border-b text-blue-500 " : " "}
        />
        <ListLink
          href={"/about"}
          content={"About"}
          border={currentPath === "/about" ? "border-b text-blue-500 " : " "}
        />

        {!isValid ? (
          <ListLink
            href={"/register"}
            content={"Register"}
            border={
              currentPath === "/register" ? "border-b text-blue-500 " : ""
            }
          />
        ) : (
          <ListLink
            href={`${"/" + userType.userType}`}
            content={"DashBoard"}
            border={
              currentPath === `${"/" + userType.userType}`
                ? "border-b text-blue-500 "
                : ""
            }
          />
        )}
        {isValid ? (
          <div
            onClick={() => {
              logOut();
            }}
          >
            <ListLink
              href={"/"}
              content={"Logout"}
              border={
                currentPath === "/login" ? "border-b text-blue-500 " : " "
              }
            />
          </div>
        ) : (
          <ListLink
            href={"/login"}
            content={"Login"}
            border={currentPath === "/login" ? "border-b text-blue-500 " : " "}
          />
        )}
      </ul>
    </div>
  );
};
export default HamburgerButton;
