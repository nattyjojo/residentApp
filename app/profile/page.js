"use client";
import UserProfileLayout from "../layouts/userProfile";
import Header from "../components/header";
import MainFooter from "../components/Footer";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import getUser from "../lib/getUser";
import UpdateData from "../layouts/updateData";
import refreshCookie from "../lib/refreshCookie";
import { Ref } from "react";
import logOut from "../lib/logOut";

const Profile = () => {
  const router = useRouter();

  const [profileData, setProfileData] = useState(null);
  const [completeProfle, setCompleteProfile] = useState(false);
  const uploaded = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refreshCookie();
        const getUserData = await getUser();
        const userData = getUserData.data;
        if (userData === null || userData === "") {
          console.log("jkjkjkj");
          logOut();
          router.push("/");
          return;
        }
        const code = userData.code;
        const codeType = code.split(":")[1];
        if (userData && codeType === "a") {
          router.push("/admin");
          return;
        }
        const profileCompleted = userData.profileCompleted;
        if (!profileCompleted) {
          setProfileData(userData);
          setCompleteProfile(true);
        } else {
          setProfileData(userData);
          setCompleteProfile(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (profileData && completeProfle === false) {
    return (
      <>
        <Header />
        <UserProfileLayout userData={profileData} />
        <MainFooter />
      </>
    );
  }
  if (completeProfle) {
    return (
      <>
        <Header />
        <UpdateData UserId={profileData} uploaded={uploaded} />
        <MainFooter />
      </>
    );
  }
};

export default Profile;
