import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-orange-600 text-white">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">🍛 Demo Restaurant</Link>
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}