import { pb } from "@/app/lib/pocketbase";
import Posts from "./Posts";

export default async function PostLayout() {
  const postList = await pb
    .collection("post")
    .getList(1, 30, { cache: "no-store" });

  return (
    <div className="bg-gray-50 p-5 m-6 rounded-2xl">
      {postList.items.map((p) => (
        <Posts
          key={p.id}
          title={p.title}
          paragraph={p.paragraph}
          image={pb.files.getURL(p, p.image)}
        />
      ))}
    </div>
  );
}
