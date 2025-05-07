import Header from "./components/Header";
import ProductGallery from "./components/ProductGallery";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-6">
      <Header />
      <ProductGallery />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;