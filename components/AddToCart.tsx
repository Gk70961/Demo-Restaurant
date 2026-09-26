"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

type AddToCartProps = {
  slug: string;
  name: string;
  price: number;
};

export default function AddToCart({ slug, name, price }: AddToCartProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  console.log("🖱️ AddToCart rendered, quantity =", quantity);

  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function increase() {
    setQuantity(quantity + 1);
  }

  function handleAdd() {
    addToCart({ slug, name, price, quantity });
    setAdded(true);
    setQuantity(1);                            // reset the selector back to 1
    setTimeout(() => setAdded(false), 2000);
    }
  const total = price * quantity;

  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={decrease}
          className="h-10 w-10 rounded-full border border-gray-300 text-xl hover:bg-gray-100"
        >
          −
        </button>
        <span className="w-8 text-center text-xl font-semibold">{quantity}</span>
        <button
          onClick={increase}
          className="h-10 w-10 rounded-full border border-gray-300 text-xl hover:bg-gray-100"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAdd}
        className="rounded-full bg-orange-600 px-8 py-3 font-semibold text-white hover:bg-orange-700 transition"
      >
        {added ? "✓ Added!" : `Add ${quantity} to cart · $${total.toFixed(2)}`}
      </button>
    </div>
  );
}