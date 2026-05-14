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






function App() {
  
  const [data] = useState(db);




  return (
    <>
      <Header/>

      <Nav/>

      {
      // contenido principal
      }
      <main>
        <div id="video-contenedor">
            <div id="video-grisaceo">
                <p id="video-texto">Somos Hoshi-Store</p>
            </div>
            <video src={tienda_online} id="video-tienda" autoPlay muted loop></video>
        </div>

        
        {
        // catalogo de productos
        }
        <ProductCatalog data={data}/>

        <PurchaseProcess/>

        <About/>

        <Reviews/>

        <Contact/>

      </main>


    </>
  )
}

export default App
