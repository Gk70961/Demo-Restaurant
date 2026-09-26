import Link from "next/link";
import { notFound } from "next/navigation";
import { getMenuItem } from "@/data/menu";
import AddToCart from "@/components/AddToCart";

export default async function MenuItemPage({ params }: PageProps<"/menu/[slug]">) {
  const { slug } = await params;
  const item = await getMenuItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-10">
      <Link href="/menu" className="text-orange-600 hover:underline">
        ← Back to menu
      </Link>

      <div className="mt-6 rounded-2xl border border-gray-200 p-10 text-center">
        <div className="text-8xl">{item.emoji}</div>
        <h1 className="mt-6 text-4xl font-bold">{item.name}</h1>
        <p className="mt-2 text-gray-500">
          {item.category} · {item.veg ? "🟢 Veg" : "🔴 Non-veg"}
        </p>
        <p className="mt-6 text-lg text-gray-700">{item.description}</p>
        <p className="mt-6 text-3xl font-bold text-orange-600">${item.price.toFixed(2)}</p>
        <AddToCart slug={item.slug} name={item.name} price={item.price} />
      </div>
    </div>
  );
}