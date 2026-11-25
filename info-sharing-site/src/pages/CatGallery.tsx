import { useState } from "react";
import GalleryLightbox from "../components/GalleryLightbox";


const images = import.meta.glob<string>(
  "../assets/gallery/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const imageDescriptions: Record<string, string> = {
  cat_couple: "The goldscale Miqote's crossing pinkies.",
  crystal_gaze: "The all-seeing cat gazes at you with flare.",
  mieu_bloodrain: "Peering down with a bloodlust.",
  mieu_iced: "The ice queen cat lord reigns supreme.",
  mieu_traditional: "Sometimes, a tradition must be kept.",
  yaemiko: "Genshin could never.",

}

const galleryImages = Object.entries(images).map(
  ([filePath, imagePath]) => {
    const fileName = filePath.split("/").pop();
    const nameWithoutExtension = fileName?.split(".")[0];

    const title = nameWithoutExtension
      ?.replaceAll("_", " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      src: imagePath,
      title: title ?? "Untitled Cat",
      description: imageDescriptions[nameWithoutExtension ?? ""] ?? "No description available.",
    };
  },
);

function CatGallery() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  return (
    <main>
      <h1>My Cat Gallery</h1>
      <p>Welcome to my collection of cats!</p>

      <div className="gallery-grid">
        {selectedImage !== null && ( <GalleryLightbox src={selectedImage.src} title={selectedImage.title} description={selectedImage.description} onClose={() => setSelectedImage( null )} />)}
        {galleryImages.map((image) => (
          <img key={image.src} src={image.src} alt={image.title} onClick={() => setSelectedImage(image)} />
        ))}
      </div>
    </main>
  );
}

export default CatGallery;
