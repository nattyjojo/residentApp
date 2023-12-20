import React from "react";
import { VscLoading } from "react-icons/vsc";

const Loading = () => {
  return (
    <div className=" h-[100vh] flex justify-around" data-testid="loading">
      <VscLoading className="text-[100px] mt-[50vh] fa-spin" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Loading;
