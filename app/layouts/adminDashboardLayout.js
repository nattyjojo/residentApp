"use client";
import Header from "../components/header";
import MainFooter from "../components/Footer";
import ListLink from "./dropDownMenu";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useState } from "react";
import handlePost from "../lib/handlePost";
import handleGetUsers from "../lib/handleGetUsers";
import handleGetPosts from "../lib/handleGetPosts";
import randomChar from "../lib/randomChar";
import FormData from "form-data";
import DOMPurify from "dompurify";
import localhost from "../lib/host";
import Table from "../components/table";
import Loading from "../components/loading";

import { FaBold, FaLink, FaImages, FaHeading } from "react-icons/fa6";
import { GrBlockQuote } from "react-icons/gr";
import { MdFormatListNumbered, MdFormatListBulleted } from "react-icons/md";
import { RiEmphasis } from "react-icons/ri";

const AddminDashBoardLayout = (children) => {
  const textAreaValue = useRef();
  const [currentTask, setCurrentTask] = useState();
  const [tittle, setTittle] = useState();
  const [mode, setMode] = useState();
  const [content, setContent] = useState();
  const [getUsers, setGetUsers] = useState(null);
  const [getPosts, setGetPosts] = useState(null);
  const [posts, setPosts] = useState(null);
  const [residents, setResidents] = useState();
  const [banner, setBanner] = useState();
  const [bannerName, setBannerName] = useState();
  const newFile = (event, cat) => {
    const fileName = event.target.files[0].name;
    const fileExtension = fileName.split(".")[1];
    const newfileName = randomChar() + `-${cat}.` + fileExtension;
    setBannerName(newfileName);
    const newFile = new File([event.target.files[0]], newfileName, {
      type: event.target.files[0].type,
    });
    return newFile;
  };
  const postFormData = new FormData();
  postFormData.append("poster", children.data.data.firstName);
  postFormData.append("postType", currentTask);
  postFormData.append("title", tittle);
  postFormData.append("content", content);
  postFormData.append("banner", banner);
  postFormData.append("bannerName", bannerName);

  useEffect(() => {
    const fetchUsers = async () => {
      const getResident = await handleGetUsers();

      setResidents(getResident.data);
      setGetUsers(null);
    };
    const fetchPosts = async () => {
      const getPosts = await handleGetPosts("all");
      setPosts(getPosts.data);
      setGetPosts(null);
    };
    if (getUsers) {
      fetchUsers();
    }
    if (getPosts) {
      fetchPosts();
    }
  }, [getUsers, getPosts]);

  const handleTextFormat = (event) => {
    const target = event.target.id;
    const heading = event.target.value;
    if (heading) {
      switch (heading) {
        case "h1":
          textAreaValue.current.value += "<h1></h1>";
          break;
        case "h2":
          textAreaValue.current.value += "<h2></h2>";
          break;
        case "h3":
          textAreaValue.current.value += "<h3></h3>";
          break;
        case "h4":
          textAreaValue.current.value += "<h4></h4>";
          break;
        case "h5":
          textAreaValue.current.value += "<h5></h5>";
          break;
        case "h6":
          textAreaValue.current.value += "<h6></h6>";
          break;
        default:
          return;
      }
    } else {
      switch (target) {
        case "bold":
          textAreaValue.current.value += '<i className="font-bold"></i>';
          break;
        case "emphasis":
          textAreaValue.current.value += '<i className="font-bold"></i>';
          break;
        case "link":
          textAreaValue.current.value += '<a href=""></a>';
          break;
        case "blockquote":
          textAreaValue.current.value += "<blockquote></blockquote>";
          break;
        ////   need attention
        case "imageUpload":
          textAreaValue.current.value += "<blockquote></blockquote>";
          break;
        case "numberedList":
          textAreaValue.current.value += "<ul><ol></ol></ul>";
          break;
        case "bulletedList":
          textAreaValue.current.value += "<ul><li></li></ul>";
          break;
        case "paragraph":
          textAreaValue.current.value += "<p></p>";
          break;

        default:
          return;
      }
    }
  };

  const buttonStyle =
    "border m-2 w-[20%] font-bold rounded px-smallest py-2 text-blue-500 hover:text-inherit hover:bg-blue-900";

  return (
    <main className="pt-[15rem] flex gap-smallest justify-between px-smallest h-[100vh]">
      <section className="border w-[30%]">
        <div className="flex justify-around">
          {/* <Image
            className="rounded-full bg-white border mb-smallest"
            width={100}
            height={100}
            src={"http://localhost:5000/residents[0].files.idCardData.filename"}
            alt="img"
          ></Image> */}
        </div>
        <div className="text-center">
          <p>
            {children.data.data.firstName + " " + children.data.data.lastName}
          </p>
          <p>{children.data.data.email}</p>
        </div>
      </section>
      <section className="w-[70%] overflow-scroll">
        <ul
          onClick={(event) => setCurrentTask(event.target.id)}
          className="font-bold bg-slate-600 py-smallest  px-2 rounded text-[green] flex justify-between"
        >
          <button
            id={"post"}
            className={
              buttonStyle +
              ` ${
                currentTask === "post"
                  ? "underline bg-blue-900 text-[green]"
                  : ""
              }`
            }
          >
            Create Blog Post
          </button>
          <button
            id={"aunousment"}
            className={
              buttonStyle +
              ` ${currentTask === "aunousment" ? "underline bg-blue-900" : ""}`
            }
          >
            Create Aunousment
          </button>
          <button
            onClick={() => setGetUsers(true)}
            id={"residents"}
            className={
              buttonStyle +
              ` ${currentTask === "residents" ? "underline bg-blue-900" : ""}`
            }
          >
            View Residents
          </button>
          <button
            onClick={() => setGetPosts(true)}
            id={"listPosts"}
            className={
              buttonStyle +
              ` ${currentTask === "listPosts" ? "underline bg-blue-900" : ""}`
            }
          >
            View Blog Posts
          </button>
          <button
            id={"viewAnouncements"}
            className={
              buttonStyle +
              ` ${
                currentTask === "viewAnouncements"
                  ? "underline bg-blue-900"
                  : ""
              }`
            }
          >
            View Aunousment
          </button>
        </ul>
        <section
          className={`bg-[gray] mt-3 ${
            currentTask === "listPosts" ? "block" : "hidden"
          }`}
        >
          {/* Post */}
          <Table content={posts} postType={"post"} />
        </section>
        <section
          className={`bg-[gray] mt-3 ${
            currentTask === "viewAnouncements" ? "block" : "hidden"
          }`}
        >
          {/* ANOUNSGSGSG */}
          <Table content={posts} postType={"aunousment"} />
        </section>

        <section
          className={`bg-[gray] mt-3 ${
            currentTask === "residents" ? "block" : "hidden"
          }`}
        >
          {/* Residendnts */}
          <table className="w-[100%]">
            <thead>
              <tr className="text-[blue] border-2 bg-[black]">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Expires</th>
                <th>ID Card</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {residents
                ? residents.map((resident, index) => (
                    <tr key={index} className="text-center font-bold">
                      <td>{resident.firstName}</td>
                      <td>{resident.lastName}</td>
                      <td>{resident.email}</td>
                      <td>{resident.phoneNumber}</td>
                      <td>{resident.date.split("T")[0]}</td>
                      <td>
                        <Image
                          src={`${localhost}idCards/${resident.files.idCardData.filename}`}
                          alt="im"
                          width={50}
                          height={50}
                          loading="lazy"
                          crossOrigin="anonymous"
                        />
                      </td>
                      <td>
                        <button className="border-2 px-2 bg-[red]  rounded-full font-bold">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </section>

        <form
          onSubmit={(event) => {
            console.log(event.target.value);
            event.preventDefault();
            handlePost(postFormData);
          }}
          className={` ${
            currentTask === "post" || currentTask === "aunousment"
              ? "block mt-5"
              : "hidden mt-5"
          }`}
        >
          <input
            onChange={(event) => setTittle(event.target.value)}
            className=" text-center py-2 px-3 w-full font-bold"
            type="text"
            placeholder="Enter Tittle"
            required
          ></input>
          <ul className="flex" onClick={(event) => handleTextFormat(event)}>
            <li title="Bold">
              <button
                type="button"
                id="bold"
                className="border py-2 bold  px-smallest"
              >
                <FaBold id={"bold"} />
              </button>
            </li>
            <li title="Emphasis">
              <button type="button" className=" border py-2 bold  px-smallest">
                <RiEmphasis id={"emphasis"} />
              </button>
            </li>
            <li title="Link">
              <button type="button" className=" border py-2 bold  px-smallest">
                <FaLink id={"link"} />
              </button>
            </li>
            <li title="BlockQuote">
              <button type="button" className=" border py-2 bold  px-smallest">
                <GrBlockQuote id={"blockquote"} />
              </button>
            </li>

            <li title="Numbered List">
              <button type="button" className=" border py-2 bold  px-smallest">
                <MdFormatListNumbered id={"numberedList"} />
              </button>
            </li>
            <li title="Bulleted List">
              <button type="button" className=" border py-2 bold  px-smallest">
                <MdFormatListBulleted id={"bulletedList"} />
              </button>
            </li>
            <li className="border" title="Heading">
              <select id="heading" className="p-1 bg-black">
                <option id={"h"}>H</option>
                <option id={"h1"} value={"h1"}>
                  H1
                </option>
                <option id={"h2"} value={"h2"}>
                  H2
                </option>
                <option value={"h3"}>H3</option>
                <option value={"h4"}>H4</option>
                <option value={"h5"}>H5</option>
                <option value={"h6"}>H6</option>
              </select>
            </li>
            <li title="Bulleted List">
              <button type="button" className=" border py-2 bold  px-smallest">
                <MdFormatListBulleted id={"paragraph"} />
              </button>
            </li>
            <input
              onChange={(event) => {
                const getNewFile = newFile(event, "banner");
                setBanner(getNewFile);
              }}
              className="border  font-bold rounded px-6 py-1 text-blue-500 hover:text-inherit hover:bg-blue-900"
              type="file"
            ></input>
            <li className="border font-bold rounded px-6 py-1 text-blue-500 hover:text-inherit hover:bg-blue-900">
              <button type="submit">Publish</button>
            </li>
          </ul>

          <div>
            <textarea
              required
              ref={textAreaValue}
              onChange={(event) => setContent(event.target.value)}
              className="w-[100%] border h-[50vh]"
            ></textarea>
          </div>
        </form>
      </section>
    </main>
  );
};
export default AddminDashBoardLayout;
