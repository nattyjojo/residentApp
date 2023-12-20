import localhost from "../lib/host";
import Image from "next/image";
const Table = (content) => {
  const posts = content.content;

  if (posts) {
    return (
      <table className="w-[100%] h-[20vh]">
        <thead className="text-[blue] border-2 bg-[black]">
          <tr className="">
            <th>Banner</th>
            <th>Tittle</th>
            <th>Date</th>
            <th>Poster</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="h-[40vh] overflow-scroll">
          {posts.map((post, index) => {
            return post.postType === content.postType ? (
              <tr
                key={index}
                className="text-center m-[10px] font-bold border border-[black] "
              >
                <td>
                  <Image
                    src={`${localhost}files/banner/${post.bannerName}`}
                    alt={`${post.title}`}
                    width={100}
                    height={100}
                    crossOrigin={`${"localhost:3000"}`}
                  />
                </td>
                <td className="overflow-hidden">{post.title}</td>
                {/* <td
                      className="line-clamp-1 overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    ></td> */}
                <td>{post.date.split("T")[0]}</td>
                <td>{post.poster}</td>
                <td>
                  <button className="border-2 px-2 bg-[green] rounded-full font-bold">
                    View
                  </button>
                </td>
                <td>
                  <button className="border-2 px-2 bg-[green] rounded-full font-bold">
                    Edit
                  </button>
                </td>
                <td>
                  <button className="border-2 px-2 bg-[red]  rounded-full font-bold">
                    Delete
                  </button>
                </td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
    );
  }
};
export default Table;
