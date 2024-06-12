"use client";
import { useState, useEffect } from "react";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../utils/dbConfig";
import { Clients } from "../../../utils/schema";

export default function AddClient() {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (!image) return;

    try {
      // Upload the image to Firebase Storage with the unique name
      const imageRef = ref(storage, `images/${image.name}`);
      const snapshot = await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(snapshot.ref);
      console.log("imageUrl: ", imageUrl);

      // Insert the image URL into the PostgreSQL database
      await db.insert(Clients).values({ image: imageUrl }).execute();
      console.log("Image URL successfully added to the database");

      // Refresh the images list
      fetchImages();
    } catch (error) {
      console.error("Error uploading image or adding URL to database:", error);
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
    <div className="bg-red-700 p-5 mt-10" style={{ marginTop: "100px" }}>
      <form onSubmit={handleImageUpload}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Upload Image</button>
      </form>
      <div>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              display: "inline-block",
              position: "relative",
              margin: "10px",
            }}
          >
            <img
              src={image.url}
              alt={`Uploaded #${index}`}
              style={{ maxWidth: "200px" }}
            />
            <button
              onClick={() => handleEdit(image.id, image.url)}
              style={{ position: "absolute", top: "5px", right: "5px" }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(image.id, image.url)}
              style={{ position: "absolute", top: "5px", right: "5px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
