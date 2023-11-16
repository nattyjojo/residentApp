import Link from "next/link";

const ListLink = (children) => {
  return (
    <li className={`hover:text-blue-500  ml-smallest  ${children.border}`}>
      <Link href={children.href}>{children.content}</Link>
    </li>
  );
};

export default ListLink;
