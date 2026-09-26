"use client";

import { createContext, useContext, useEffect, useState } from "react";

// The shape of one item in the cart
export type CartItem = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
};

// Everything the box offers to other components
type CartContextType = {
  items: CartItem[];
  addToCart: (newItem: CartItem) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

// 1️⃣ Create the empty box
const CartContext = createContext<CartContextType | null>(null);

// 2️⃣ The Provider: holds the state and shares it with everything inside it
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Runs ONCE when the app starts in the browser: load the saved cart
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cart");
      if (saved) {
        // Intentional: copying data from an outside system (localStorage) into state once, on first load
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItems(JSON.parse(saved));
      }
    } catch {
      // storage blocked or data corrupted → just start with an empty cart
    }
    setLoaded(true);
  }, []);

  // Runs every time the cart changes: save it
  useEffect(() => {
    if (!loaded) return; // don't overwrite the saved cart before we've loaded it
    try {
      localStorage.setItem("cart", JSON.stringify(items));
    } catch {
      // storage blocked (e.g. private mode) → cart still works, just won't persist
    }
  }, [items, loaded]);

  function addToCart(newItem: CartItem) {
    const existing = items.find((item) => item.slug === newItem.slug);

    if (existing) {
      // Dish already in cart → increase its quantity
      setItems(
        items.map((item) =>
          item.slug === newItem.slug
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      );
    } else {
      // New dish → add it to the end of the list
      setItems([...items, newItem]);
    }
  }

  function removeFromCart(slug: string) {
    setItems(items.filter((item) => item.slug !== slug));
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext value={{ items, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext>
  );
}

// 3️⃣ A shortcut so components can just write: const { totalItems } = useCart();
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return context;
}