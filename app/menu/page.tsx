import Link from "next/link";
import { getMenu } from "@/data/menu";

export default async function MenuPage() {
  const items = await getMenu();
  console.log("🍛 Menu page rendered on the SERVER");

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl font-bold">Our Menu</h1>
      <p className="mt-2 text-gray-600">Something extraordinary has been curated.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
        return (
          <Link
            key={item.slug}
            href={`/menu/${item.slug}`}
            className="block rounded-xl border border-gray-200 p-6 hover:shadow-lg transition"
          >
            <div className="text-5xl">{item.emoji}</div>
            <h2 className="mt-4 text-xl font-semibold">{item.name}</h2>
            <p className="mt-1 text-sm text-gray-500">
              {item.category} · {item.veg ? "🟢 Veg" : "🔴 Non-veg"}
            </p>
            <p className="mt-3 font-bold text-orange-600">${item.price.toFixed(2)}</p>
          </Link>
        )})}
      </div>
    </div>
  );
}