export default function ProductCard({ image, name, price, whatsappMessage }) {
  return (
    <div className="bg-white rounded-xl shadow p-3 flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-purple-600 font-bold">{price}</p>
      <a
        href={`https://wa.me/549XXXXXXXXXX?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-sm bg-green-500 text-white px-4 py-1 rounded"
      >
        Consultar
      </a>
    </div>
  );
}