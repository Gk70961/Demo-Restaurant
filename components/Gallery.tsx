import Image from "next/image";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Green curry with fresh herbs" },
  { src: "/images/gallery-2.jpg", alt: "Paneer curry by candlelight" },
  { src: "/images/gallery-3.jpg", alt: "Butter chicken with rice and wine" },
  { src: "/images/gallery-4.jpg", alt: "Curry served with naan bread" },
  { src: "/images/gallery-5.jpg", alt: "Chicken curry in a copper bowl" },
  { src: "/images/gallery-6.jpg", alt: "Stuffed curry on a decorated plate" },
  { src: "/images/gallery-7.jpg", alt: "South Indian curry platter" },
  { src: "/images/gallery-8.jpg", alt: "Biryani and curry in serving bowls" },
];

export default function Gallery() {
  return (
    <section className="pb-1">
      <h2 className="pb-8 text-center text-3xl font-bold">Gallery</h2>

      {/* 2 columns on phones, 4 columns from medium screens up */}
      <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
        {photos.map((photo) => (
          <div key={photo.src} className="group relative aspect-square overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
