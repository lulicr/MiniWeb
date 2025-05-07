import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://via.placeholder.com/300x200",
    name: "Cuadro Decorativo",
    price: "$3500",
    whatsappMessage: "Hola, me interesa el cuadro decorativo."
  },
  {
    image: "https://via.placeholder.com/300x200",
    name: "Portarretrato Blanco",
    price: "$2900",
    whatsappMessage: "Hola, me gustaría saber más sobre el portarretrato."
  }
];

export default function ProductGallery() {
  return (
    <div className="grid grid-cols-1 gap-4 w-full max-w-md">
      {products.map((prod, index) => (
        <ProductCard key={index} {...prod} />
      ))}
    </div>
  );
}