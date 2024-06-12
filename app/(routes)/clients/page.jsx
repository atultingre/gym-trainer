"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/dbConfig";
import { Clients } from "../../../utils/schema";

const GymClients = () => {
  const [images, setImages] = useState([]);
  console.log("clients: ", images);
  const fetchImages = async () => {
    try {
      const result = await db.select().from(Clients).execute();
      const imageUrls = result.map((row) => ({ id: row.id, url: row.image }));
      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching images from database:", error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="mt-10 max-w-2xl py-16 sm:px-0 sm:py-5 md:max-w-7xl">
      <h2 className="font-bold text-3xl mt-5">Clients</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {images.map((client) => (
          <div key={client.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={client.url}
                alt={client.url}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default GymClients;
