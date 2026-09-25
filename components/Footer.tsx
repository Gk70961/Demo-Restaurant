type FooterProps = {
  restaurantName: string;
};

export default function Footer({ restaurantName }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 text-center p-6">
      © {year} {restaurantName}. Built with Next.js.
    </footer>
  );
}