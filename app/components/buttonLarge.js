import Link from "next/link";
const LargeButton = (children) => {
  return (
    <button className="border rounded px-smallest  max-h-12 text-blue-500 hover:text-inherit hover:bg-blue-900">
      <Link href={children.link}>{children.content}</Link>
    </button>
  );
};
export default LargeButton;
