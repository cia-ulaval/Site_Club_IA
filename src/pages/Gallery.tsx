function Gallery() {
  const images = [
    {
      src: "/media/club2024.png",
      desc: "Beautiful Landscape",
    },
    {
      src: "/media/clubrencontre.png",
      desc: "Mountain View",
    },
    {
      src: "/media/compétition.png",
      desc: "Sunset Over Water",
    },
    {
      src: "/media/f1tenth.jpg",
      desc: "Forest Pathway",
    },
    {
      src: "/media/presentation.png",
      desc: "City Lights",
    },
    {
      src: "/media/testclub.png",
      desc: "Snowy Mountains",
    },
    {
      src: "/media/tuto2.jpg",
      desc: "Snowy Mountains",
    },
    {
      src: "/media/rencontrecia.jpeg",
      desc: "Snowy Mountains",
    },
    {
      src: "/media/cialocal.jpg",
      desc: "Snowy Mountains",
    },
  ];

  return (
    <section className="container mx-auto p-4 text-center">
      <h1 className="text-5xl font-bold gradient-text mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
