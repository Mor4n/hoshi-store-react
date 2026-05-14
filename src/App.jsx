import { useState } from "react"
import { tienda_online } from "./barrels/assets"
import Header from "./components/Header"
import Nav from "./components/Nav"
import ProductCatalog from "./components/ProductCatalog"
import db from "./data/db"
import PurchaseProcess from "./components/PurchaseProcess"
import About from "./components/About"
import TeamCard from "./components/common/TeamCard"
import Reviews from "./components/Reviews"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {

  const [data] = useState(db);




  return (
    <>
      <Header />

      <Nav />

      <main>
        <div id="video-contenedor">
          <div id="video-grisaceo">
            <p id="video-texto">Somos Hoshi-Store</p>
          </div>
          <video src={tienda_online} id="video-tienda" autoPlay muted loop></video>
        </div>

        <ProductCatalog data={data} />

        <PurchaseProcess />

        <About />

        <Reviews />

        <Contact />

      </main>

      <Footer />

      <a href="#" class="boton-whatsapp"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/960px-WhatsApp.svg.png" alt="Imagen de logo de Whatsapp" /></a>
      <a href="#encabezado" class="boton-subir">
        <img src="./img/flecha.png" alt="Botón de subir hacia arriba" id="img-boton-subir" />
      </a>


    </>
  )
}

export default App
