import React from "react";
import Image from "next/image";
import { useState } from "react/cjs/react.production.min";
import { StarIcon } from "@heroicons/react/solid";

function Product({ id, category, description, image, price, title }) {
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs text-gray-500 italic">
        {category}
      </p>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className=" text-yellow-500 flex">
        <StarIcon className="h-4" />
        <StarIcon className="h-4" />
        <StarIcon className="h-4" />
        <StarIcon className="h-4" />
        <StarIcon className="h-4" />
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">£{price}</div>
      <button className="button mt-auto">Add To Basket</button>
    </div>
  );
}

export default Product;
