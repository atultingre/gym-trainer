import React from "react";
const clients = [
  {
    id: 1,
    name: "Basic Tee",
    beforeImageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    afterImageSrc: "./profile.jpg",
  },
  {
    id: 2,
    name: "Basic Tee",
    beforeImageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    afterImageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: "Basic Tee",
    beforeImageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    afterImageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
];

const Clients = () => {
  return (
    <div className="max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="font-bold text-3xl mt-5">Clients</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
        {clients.map((client) => (
          <div key={client.id} className="group relative">
            <div className="flex flex-col md:flex-row gap-10 bg-gray-100 px-3 py-5 rounded-xl shadow-md">
              <div>
                <h2 className="font-semibold text-xl mb-2">Before</h2>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md shadow-md lg:aspect-none group-hover:opacity-75 lg:h-[300px]">
                  <img
                    src={client.beforeImageSrc}
                    alt={client.name}
                    className="h-full w-full object-cover object-center lg:h-[300px] lg:w-[300px]"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-xl mb-2">After</h2>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md shadow-lg lg:aspect-none group-hover:opacity-75 lg:h-[300px]">
                  <img
                    src={client.afterImageSrc}
                    alt={client.name}
                    className="h-80 w-full object-cover object-center lg:h-[300px] lg:w-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Clients;
