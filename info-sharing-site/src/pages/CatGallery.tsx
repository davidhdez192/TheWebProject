const images = import.meta.glob<string>(
  "../assets/gallery/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);
const imagePaths = Object.values(images);

function CatGallery() {
  return (
    <main>
      <h1>My Cat Gallery</h1>
      <p>Welcome to my collection of cats!</p>

      <div className="gallery-grid">
        {imagePaths.map((imagePath) => (
          <img key={imagePath} src={imagePath} alt="Cat" />
        ))}
      </div>
    </main>
  );
}

export default CatGallery;
