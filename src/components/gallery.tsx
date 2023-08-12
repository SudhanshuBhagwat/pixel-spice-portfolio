"use client";

import { CldImage } from "next-cloudinary";

export default function Gallery({ images }) {
  return (
    <div>
      <h2 className="text-xl font-bold">
        {images[0].folder.split("_").join(" ")}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image: { public_id: string }) => (
          <CldImage
            key={image.public_id}
            width="960"
            height="600"
            src={image.public_id}
            sizes="100vw"
            alt="Description of my image"
          />
        ))}
      </div>
    </div>
  );
}
