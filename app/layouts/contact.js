"use client";
import Header from "../components/header";
import MainFooter from "../components/Footer";
import { useState } from "react";

const ContactLayout = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [subit, setSubmit] = useState(null);
  const [message, setMessage] = useState();

  const [comfirmedPassword, setComfirmedPassword] = useState(null);
  const signUpData = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    message: message,
  };

  return (
    <>
      <Header />

      <main className=" mb-[10rem] flex justify-center ">
        <section>
          <h1 className="font-bold text-big pt-[15rem]">Contact :</h1>

          <form
            onSubmit={(event) => {
              event.preventDefault();

              console.log(signUpData);
            }}
            className=" border  rounded p-small"
          >
            <h1 className="font-bold">Name</h1>

            <p className={`text-[green] ${subit ? "block" : "hidden"} `}>
              sign Up succesfull!
            </p>
            <div className="flex gap-smallest">
              <input
                className=" w-[100%] rounded py-3 px-2"
                placeholder="Enter First Name"
                required
                onChange={(event) => setFirstName(event.target.value)}
              ></input>
              <input
                className="w-[100%] rounded py-3 px-2"
                placeholder="Enter Last Name"
                required
                onChange={(event) => setLastName(event.target.value)}
              ></input>
            </div>
            <br></br>
            <h1 className="font-bold">Contact</h1>
            <div className="flex gap-smallest">
              <input
                className=" w-[100%] rounded py-3 px-2"
                placeholder="Enter Phone Number"
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
              ></input>
              <input
                className="w-[100%] rounded py-3 px-2"
                placeholder="Enter Email"
                required
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <br></br>
            <h1 className="font-bold">Message</h1>
            <textarea
              onChange={(event) => setMessage(event.target.value)}
              className="w-full h-[20vh]"
            ></textarea>

            <br></br>
            <div className="flex justify-around ">
              <button
                type="reset"
                onClick={() => setSubmit(!subit)}
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
export default ContactLayout;
