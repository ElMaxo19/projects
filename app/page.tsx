import Form from "@/components/Form/Form";
import PostLayout from "@/components/Posts/PostLayout";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-gray-300 min-h-152 m-6 p-3 rounded-2xl ">
      <Form />
      <PostLayout />
    </div>
  );
}
