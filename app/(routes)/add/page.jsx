"use client";
import { useState, useEffect } from "react";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../utils/dbConfig";
import { Clients } from "../../../utils/schema";
import { toast } from "react-toastify";
import { Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AddClient() {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (!image) return;

    try {
      const imageRef = ref(storage, `images/${image.name}`);
      const snapshot = await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(snapshot.ref);
      console.log("imageUrl: ", imageUrl);

      // Insert the image URL into the PostgreSQL database
      await db.insert(Clients).values({ image: imageUrl }).execute();
      toast.success("Image uploaded successfully");

      // Refresh the images list
      fetchImages();
    } catch (error) {
      console.error("Error uploading image or adding URL to database:", error);
      toast.error("Failed to upload image");
    }
  };

  const fetchImages = async () => {
    try {
      const result = await db.select().from(Clients).execute();
      const imageUrls = result.map((row) => ({ id: row.id, url: row.image }));
      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching images from database:", error);
    }
  };

  const handleEdit = async () => {};
  const handleDelete = async () => {};

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="px-2  my-10 w-full">
      <div className="flex justify-end w-full mt-10">
        <Dialog>
          <DialogTrigger className="bg-white text-black px-3 py-2 rounded-lg">Add Client</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <div className="flex flex-1 flex-col justify-center lg:px-8">
                <div className="sm:mx-auto justify-center sm:w-full sm:max-w-sm">
                  <div className="cursor-pointer flex justify-center  w-full mt-4 h-16">
                    <img
                      src="./logo-black.png"
                      alt="logo"
                      className="rounded-full bg-white p-1"
                    />
                  </div>
                  <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white-700">
                    Add Client
                  </h2>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" onSubmit={handleImageUpload}>
                    <div className="mt-2">
                      <input
                        id="image"
                        name="image"
                        type="file"
                        className=""
                        autoComplete="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {images.map((image, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img
                    src={image.url}
                    alt={image.url}
                    style={{ maxWidth: "100px" }}
                    className="rounded-lg"
                  />
                </td>
                <td className="py-4 px-6 flex gap-5 items-center justify-center">
                  <button
                    onClick={() => handleEdit(image.id, image.url)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(image.id, image.url)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
