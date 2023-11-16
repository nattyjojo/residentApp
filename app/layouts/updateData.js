"useClient";
import { useState } from "react";
import updataUserData from "../lib/updataUserData";
import { useEffect } from "react";
import FormData from "form-data";
import { useRouter } from "next/navigation";
const UpdateData = (UserId, uploaded) => {
  const userData = UserId.UserId;
  const [idCard, setIdCard] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [isData, setIsdada] = useState(false);
  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);
  const router = useRouter();
  const newFile = (event, cat) => {
    const fileName = event.target.files[0].name;
    const fileExtension = fileName.split(".")[1];
    const newfileName = userData._id + `-${cat}.` + fileExtension;
    const newFile = new File([event.target.files[0]], newfileName, {
      type: event.target.files[0].type,
    });
    return newFile;
  };
  const handleData = async () => {
    const formData = new FormData();
    formData.append("profilePhoto", profilePhoto);
    formData.append("idCard", idCard);
    formData.append("expiryDate", expiryDate);
    formData.append("UserId", userData._id);
    formData.append("UserEmail", userData.email);
    const postFormData = await updataUserData(formData);
    if (postFormData.statusText === "OK") {
      return true;
    }
  };

  return (
    <section className="bg-[rgba(0,0,0,0.75)] flex justify-center py-[5rem]  w-[100vw]  fixed top-0">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setIsdada(!isData);
          handleData();
          if (handleData) {
            setFormSubmitSuccess(true);
          }
        }}
        className="border flex flex-col bg-[black] opacity-full text-center p-[10rem] justify-items-center"
      >
        <label className=" font-bold  text-smallest">Upload Photo</label>
        <input
          onChange={(event) => {
            const getNewFile = newFile(event, "profile-photo");
            setProfilePhoto(getNewFile);
          }}
          type="file"
          name="profilePhoto"
          required
        ></input>

        <label className="font-bold text-smallest">Upload ID Card</label>
        <input
          onChange={(event) => {
            const getNewFile = newFile(event, "id-card");
            setIdCard(getNewFile);
          }}
          type="file"
          name="idCard"
          required
        ></input>
        <label className=" font-bold text-smallest">
          Enter ID Card Expirey Date
        </label>
        <input
          onChange={(event) => setExpiryDate(event.target.value)}
          type="date"
          name="date"
          required
        ></input>
        <button
          className="py-3 border rounded-full hover:bg-[red] mt-10"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
export default UpdateData;
