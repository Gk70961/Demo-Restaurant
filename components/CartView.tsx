"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartView() {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();
  const [ordered, setOrdered] = useState(false);

  function placeOrder() {
    clearCart();
    setOrdered(true);
  }

  if (ordered) {
    return (
      <div className="mt-8 rounded-xl bg-green-50 p-8 text-center">
        <p className="text-5xl">🎉</p>
        <p className="mt-4 text-xl font-semibold">Order placed! (demo)</p>
        <Link href="/menu" className="mt-4 inline-block text-orange-600 hover:underline">
          Order more →
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500">
        <p>Your cart is empty.</p>
        <Link href="/menu" className="mt-4 inline-block text-orange-600 hover:underline">
          Browse the menu →
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <ul className="divide-y divide-gray-200 rounded-xl border border-gray-200">
        {items.map((item) => (
          <li key={item.slug} className="flex items-center justify-between p-4">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">
                {item.quantity} × ${item.price.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.slug)}
                className="text-sm text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between">
        <button onClick={clearCart} className="text-sm text-gray-500 hover:underline">
          Clear cart
        </button>
        <p className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
      </div>

      <button
        onClick={placeOrder}
        className="mt-6 w-full rounded-full bg-orange-600 py-3 font-semibold text-white hover:bg-orange-700 transition"
      >
        Place order
      </button>
    </div>
  );
}