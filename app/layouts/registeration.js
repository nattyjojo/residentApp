"use client";
import Header from "../components/header";
import MainFooter from "../components/Footer";
import { useState } from "react";
import handleRegisteration from "../lib/handleRegisteration";
import { useRouter } from "next/navigation";

const Registeration = () => {
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [submit, setSubmit] = useState(null);
  const [comfirmedPassword, setComfirmedPassword] = useState(null);
  const [code, setCode] = useState();

  const signUpData = {
    password: password,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    code: code,
  };
  const router = useRouter();

  return (
    <>
      <Header />

      <main className=" my-[5rem] flex justify-center ">
        <section>
          <h1 className="font-bold text-big text-[#3b82f6]">Sign-Up :</h1>

          <form
            onSubmit={async (event) => {
              event.preventDefault();
              const handleRegisterationProcess = await handleRegisteration(
                signUpData
              );

              if (handleRegisterationProcess) {
                setSubmit(true);
                router.push("/login");
              } else {
                setSubmit(false);
                router.push("/login");
              }
            }}
            className=" border  rounded p-small"
          >
            <h1 className="font-bold">
              Name
              <span className="text-[#3b82f6] text-[20px]">*</span>
            </h1>
            <p
              className={`${
                submit && submit === true
                  ? "block text-[green]"
                  : "" || submit === false
                  ? "block text-[rgb(59, 130, 246)]"
                  : "" || submit === null
                  ? "hidden"
                  : ""
              }`}
            >
              {submit && submit === true
                ? "Registration Successfull!"
                : "" || submit === false
                ? "Account Exist, You Will Redirected To Login!"
                : ""}
            </p>
            <div className="flex gap-smallest">
              <input
                className=" w-[100%] rounded py-3 px-2"
                placeholder="Enter First Name"
                required
                type="text"
                onChange={(event) => setFirstName(event.target.value)}
              ></input>
              <input
                className="w-[100%] rounded py-3 px-2"
                placeholder="Enter Last Name"
                type="text"
                required
                onChange={(event) => setLastName(event.target.value)}
              ></input>
            </div>
            <br></br>
            <h1 className="font-bold">
              Contact
              <span className="text-[#3b82f6] text-[20px]">*</span>
            </h1>
            <div className="flex gap-smallest">
              <input
                className=" w-[100%] rounded py-3 px-2"
                placeholder="Enter Phone Number"
                type="tel"
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
              ></input>
              <input
                className="w-[100%] rounded py-3 px-2"
                placeholder="Enter Email"
                required
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <br></br>
            <h1 className="font-bold">
              Password
              <span className="text-[#3b82f6] text-[20px]">*</span>
            </h1>
            <div className="flex gap-smallest">
              <input
                type="password"
                className={`w-[100%] rounded  py-3 px-2 ${
                  comfirmedPassword ? "bg-green-600" : ""
                }`}
                placeholder="Enter Password"
                required
                onChange={(event) => setPassword(event.target.value)}
              ></input>
              <input
                type="password"
                className={`w-[100%] rounded  py-3 px-2 ${
                  comfirmedPassword ? "bg-green-600" : ""
                }`}
                placeholder="Comfirm Password"
                required
                onChange={(event) => {
                  [
                    event.target.value === password
                      ? setComfirmedPassword(!comfirmedPassword)
                      : setComfirmedPassword(null),
                  ];
                }}
              ></input>
            </div>

            <br></br>
            <h1 className="font-bold">
              Code
              <span className="text-[#3b82f6] text-[20px]">*</span>
            </h1>
            <div className="flex gap-smallest">
              <input
                className=" w-[100%] text-center rounded py-3 px-2"
                placeholder="Enter Registeration Code"
                type="text"
                onChange={(event) => setCode(event.target.value)}
                required
              ></input>
            </div>

            <div className="flex justify-around ">
              <button
                type="submit"
                className="border mt-small w-[40%] font-bold rounded px-smallest py-2 text-blue-500 hover:text-inherit hover:bg-blue-900"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
      <MainFooter />
    </>
  );
};
export default Registeration;
