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

  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  const addToCart = (producto) => {
    // Revisar si ya existe el producto en el carrito
    const findProductIndex = cart.findIndex((item) => item.id === producto.id);

    // si llego a la cantidad maxima, que retorne
    // if(cart[findProductIndex].cantidad===MAX_ITEMS) return;

    if (findProductIndex < 0) {
      console.log("No existe, añadiendo");

      // Creo copia del producto y le agrego la cantidad, esto para no romper inmutabilidad
    setCart((prevCart) => [...prevCart, { ...producto, cantidad: 1 }]);
    } else {

      console.log("Ya existe, añadiendo cantidad");

      
      setCart( (prevState)=> prevState.map( ele=>
    {
        if(ele.id === producto.id && ele.cantidad< MAX_ITEMS){

          return{
            ...ele,
            cantidad: ele.cantidad + 1
          }

        }
        return ele;
    }
    ))
      
    }
  };

  const decreaseQuantity = (id)=>{

    setCart( (prevState)=> prevState.map( item => 

        {

            if(item.id === id && item.cantidad>MIN_ITEMS){
              return{
                ...item,
                cantidad: item.cantidad - 1

              }

            }
            return item;


        }

      ))



  }

  const increaseQuantity = (id)=>{

    setCart( (prevState)=> prevState.map( ele=>
    {
        if(ele.id === id && ele.cantidad< MAX_ITEMS){

          return{
            ...ele,
            cantidad: ele.cantidad + 1
          }

        }
        return ele;


    }

    ))
    
  }

  const emptyCart = () =>{

    setCart([]);

  }



  return (
    <>
      <Header />

      <Nav 
        cart={cart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        emptyCart={emptyCart}
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
