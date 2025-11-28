"use client";
import { FormEvent, ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export default function PostForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [image, setImage] = useState<File | null>(null);

  // Enviar datos del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !paragraph) {
      return alert(
        "Todos los posts deben llevar título y párrafo. La imagen es opcional."
      );
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("paragraph", paragraph);
    if (image) {
      formData.append("image", image);
    }

    await pb.collection("post").create(formData);

    // Forzar la actualización del Server Component
    router.refresh();

    setTitle("");
    setParagraph("");
    setImage(null);
  };

  // Manejar input de imagen
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div>
      <form
        className="bg-gray-400 p-4 m-4 rounded-2xl py-8"
        id="Formulario"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-white block ml-2 p-1"
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="bg-white block ml-2 my-1 p-1 resize-none"
          placeholder="Párrafo"
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
        />

        <input
          className="bg-blue-50 mx-3 p-1 hover:cursor-pointer"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <button
          className="mx-3 bg-blue-100 py-2 px-3 rounded-md border-r-blue-400 border-b-blue-400 border-2 text-blue-500 text-lg hover:cursor-pointer"
          type="submit"
        >
          Crear Post
        </button>
      </form>
    </div>
  );
}
