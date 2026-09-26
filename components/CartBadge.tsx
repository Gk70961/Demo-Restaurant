"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartBadge() {
  const { totalItems } = useCart();

  return (
    <Link href="/cart" className="whitespace-nowrap rounded-full bg-white px-3 py-1 font-semibold text-orange-600">
      🛒 {totalItems}
    </Link>
  );
}