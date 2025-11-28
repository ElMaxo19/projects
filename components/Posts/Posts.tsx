import Image from "next/image";

export default async function Posts({
  title,
  paragraph,
  image = null,
}: {
  title: string;
  paragraph: string;
  image: string | null;
}) {
  return (
    <>
      <h1 className="bg-red-500 text-white text-2xl font-bold w-fit px-3 py-2 rounded-2xl border-r-4 border-b-4 border-red-900">
        {title}
      </h1>
      <p className="m-6 ml-2 text-xl">{paragraph}</p>
      {image && (
        <Image
          src={image}
          alt="Imagen del post"
          width={230}
          height={230}
          className="ml-2 border-2 border-black rounded-xl mb-6"
        />
      )}
    </>
  );
}
