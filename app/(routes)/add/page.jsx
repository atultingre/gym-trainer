"use client";
import { useState, useEffect } from "react";
import { storage } from "../../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db } from "../../../utils/dbConfig";
import { Clients } from "../../../utils/schema";
import { toast } from "react-toastify";
import { Dumbbell, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

export default function AddClient() {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);
  // const [isDeleting, setIsDeleting] = useState({});

  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (!image) return;
    setIsLoading(true);
    try {
      const uniqueImageName = `${uuidv4()}-${image.name}`;
      const imageRef = ref(storage, `images/${uniqueImageName}`);
      const snapshot = await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(snapshot.ref);

      await db.insert(Clients).values({ image: imageUrl }).execute();
      toast.success("Image uploaded successfully");

      fetchImages();
      setIsLoading(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error uploading image or adding URL to database:", error);
      toast.error("Failed to upload image");
    } finally {
      setIsLoading(false);
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

  const handleDelete = async (image) => {
    setIsLoading(true);
    try {
      // Delete the image from Firebase Storage
      const imageRef = ref(storage, image.url);
      await deleteObject(imageRef);

      // Delete the image record from the database
      const result = await db
        .delete(Clients)
        .where(eq(Clients.id, image.id))
        .returning();
      if (result) {
        setIsLoading(false);

        // Update the local state to reflect the deletion
        fetchImages();
        toast.success("Image deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      toast.error("Failed to delete image");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="px-2  my-10 w-full">
      <div className="flex justify-end w-full mt-10">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger className="bg-white text-black px-3 py-2 rounded-lg">
            Add Client
          </DialogTrigger>
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
                        autoComplete="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                          loading && "cursor-disable"
                        } `}
                      >
                        {loading ? (
                          <Loader2 className="animate-spin mr-2" />
                        ) : (
                          "Submit"
                        )}
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
                  <AlertDialog>
                    <AlertDialogTrigger className="font-medium px-3 py-2 rounded-lg bg-red-600 text-white dark:text-white hover:underline">
                      Delete
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the imagee from the database.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className={`bg-red-500 text-white ${
                            loading && "cursor-disable"
                          }`}
                          onClick={() => handleDelete(image)}
                        >
                          {loading ? (
                            <Loader2 className="animate-spin mr-2" />
                          ) : (
                            "Yes"
                          )}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
