import React from "react";
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

const ClientsTable = ({ images, loading }) => {
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

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
      <table className="w-full text-sm text-justify rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className=" py-3 text-center">
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
              <td className=" px-6 flex items-center h-36  justify-center">
                <AlertDialog>
                  <AlertDialogTrigger className="w-40 font-medium px-3 py-2 rounded-lg bg-red-600 text-white dark:text-white">
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
  );
};

export default ClientsTable;
