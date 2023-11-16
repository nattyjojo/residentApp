"use client";
const SmallButton = (children) => {
  return (
    <button
      className="border px-smallest rounded-lg border-b-[4px] m-smallest hover:bg-sky-600 font-bold"
      onClick={() => {
        children.funct;
      }}
    >
      {children.content}
    </button>
  );
};
export default SmallButton;
