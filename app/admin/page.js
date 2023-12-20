"use client";
import AddminDashBoardLayout from "../layouts/adminDashboardLayout";
import Header from "../components/header";
import MainFooter from "../components/Footer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import refreshCookie from "../lib/refreshCookie";
import getUser from "../lib/getUser";
import logOut from "../lib/logOut";
const AddminDashBoard = () => {
  const router = useRouter();

  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //await refreshCookie();
        const getUserData = await getUser();
        const userData = getUserData.data;

        if (userData === null || userData === "") {
          logOut();
          router.push("/");
          return;
        }
        const code = userData.code;
        const codeType = code.split(":")[1];
        if (codeType === "u") {
          router.push("/profile");
          return;
        }
        setAdminData(getUserData);
        //const profileCompleted = userData.profileCompleted;
        // if (!profileCompleted) {
        //   setProfileData(userData);llllllllllll
        //   setCompleteProfile(true);
        // } else {
        //   setProfileData(userData);
        //   setCompleteProfile(false);
        // }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (adminData) {
    return (
      <>
        <Header />
        <AddminDashBoardLayout data={adminData} />
        <MainFooter />
      </>
    );
  }
};
export default AddminDashBoard;
