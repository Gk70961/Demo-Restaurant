import Link from "next/link";
import CartBadge from "@/components/CartBadge";

export default function Header() {
  return (
    <header className="bg-orange-600 text-white">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="whitespace-nowrap text-lg font-bold sm:text-xl">🍛 Demo Restaurant</Link>
        <div className="flex items-center gap-3 text-sm sm:gap-6 sm:text-base">
          <Link href="/" className="hidden sm:inline">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/menu">Menu</Link>
          <CartBadge />
        </div>
      </nav>
    </header>
  );
}