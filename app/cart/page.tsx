import CartView from "@/components/CartView";

export default function CartPage() {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <CartView />
    </div>
  );
}