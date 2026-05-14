
import React from 'react'
import { carrito, logo, lupa } from '../barrels/assets'



function Nav() {
  return (
    <>
        <nav id="navegacion">
        <h1 id="logo">
            <a href="#encabezado"><img src={logo} alt="Logo de Hoshi-Store" id="logo-img"/></a>
        </h1>


        <ul className="navegacion-lista">
            <li><a href="#catalogo">Catalogo</a></li>
            <li><a href="#compra">Proceso de compra</a></li>
            <li><a href="#sobre">Sobre nosotros</a></li>
            <li><a href="#fotos">Fotos de la comunidad</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>

        <div className="buscar-contenedor">
            <input type="text" placeholder="Ingrese aquí el producto a buscar" id="buscar-input"/>
            <button type="button" id="buscar-boton">
                <img src={lupa} alt="Ícono de lupa" id="buscar-imagen"/>
            </button>
        </div>

        <div className="carrito-contenedor">
            <button type="button" id="carrito-boton">
                <img src={carrito} alt="Imagen de carrito de compras" id="carrito-compras"/>
            </button>
        </div>

    </nav>
    </>
  )
}

export default Nav