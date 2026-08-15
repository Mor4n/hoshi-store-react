import { useState } from "react";
import { flecha, tienda_online } from "./barrels/assets";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ProductCatalog from "./components/ProductCatalog";
import PurchaseProcess from "./components/PurchaseProcess";
import About from "./components/About";
import Reviews from "./components/Reviews";
import useCart from "./hooks/useCart";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    data,
    addToCart,
    cart,
    decreaseQuantity,
    increaseQuantity,
    emptyCart,
    removeProduct,
    isEmpty,
    totalToPay,
  } = useCart();

  return (
    <>
      <Header />

      <Nav
        cart={cart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        emptyCart={emptyCart}
        removeProduct={removeProduct}
        isEmpty={isEmpty}
        totalToPay={totalToPay}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <main>
        <div id="video-contenedor">
          <div id="video-grisaceo">
            <p id="video-texto">Somos Hoshi-Store</p>
          </div>
          <video
            src={tienda_online}
            id="video-tienda"
            autoPlay
            muted
            loop
          ></video>
        </div>

        <ProductCatalog
          data={data}
          addToCart={addToCart}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <PurchaseProcess />

        <About />

        <Reviews />

        <Contact />
      </main>

      <Footer />

      <a href="#" className="boton-whatsapp">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/960px-WhatsApp.svg.png"
          alt="Imagen de logo de Whatsapp"
        />
      </a>
      <a href="#encabezado" className="boton-subir">
        <img
          src={flecha}
          alt="Botón de subir hacia arriba"
          id="img-boton-subir"
        />
      </a>
    </>
  );
}

export default App;
