import Gallery from "@/components/gallery";
import { v2 as cloudinary } from "cloudinary";

async function getImages() {
  const results = await cloudinary.search
    .expression("resource_type:image and folder:cur_sections")
    .execute();

  return results.resources.map((resource: any) => {
    return {
      public_id: resource.public_id,
      folder: resource.folder,
    };
  });
}

export default async function Home() {
  const images = await getImages();

  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold pb-4">Pixel Spice</h1>
      <Gallery images={images} />
    </main>
  );
}
