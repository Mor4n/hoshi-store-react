import { useState } from "react";
import { flecha, tienda_online } from "./barrels/assets";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ProductCatalog from "./components/ProductCatalog";
import db from "./data/db";
import PurchaseProcess from "./components/PurchaseProcess";
import About from "./components/About";
import TeamCard from "./components/common/TeamCard";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [data] = useState(db);

  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    // Revisar si ya existe el producto en el carrito
    const findProductIndex = cart.findIndex((item) => item.id === producto.id);

    if (findProductIndex < 0) {
      console.log("No existe, añadiendo");

      // Le añado la propiedad cantidad en 1
      producto.cantidad = 1;

      // Se lo establezco como nuevo valor en carrito
      setCart((prevCart) => [...prevCart, producto]);
    } else {
      
      console.log("Ya existe, añadiendo cantidad");

      const carritoActualizado = [...cart];

      carritoActualizado[findProductIndex].cantidad +=1

      setCart(carritoActualizado);
      
    }
  };

  return (
    <>
      <Header />

      <Nav cart={cart} />

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

        <ProductCatalog data={data} addToCart={addToCart} />

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
