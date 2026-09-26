import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full">
      {/* "fill" makes the image cover its parent; the parent must be "relative" */}
      <Image
        src="/images/hero.jpg"
        alt="Elegant restaurant table with food and wine"
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay so the white text is readable on top of the photo */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-4xl font-bold sm:text-6xl">Demo Restaurant</h1>
        <p className="mt-4 max-w-xl text-lg text-gray-200">
          Authentic South Indian flavours, cooked with love.
        </p>
        <Link
          href="/menu"
          className="mt-8 rounded-full bg-orange-600 px-8 py-3 font-semibold hover:bg-orange-700 transition"
        >
          View Menu
        </Link>
      </div>
    </section>
  );
}
