
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

            <div id="carrito">
                <table className="w-100 table">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_ep3cqf6n3h56t1cnu6qq84oq78/-S897-FWEBP" alt="" /></td>
                            <td>HUNTER X HUNTER N.1</td>
                            <td>$159.99</td>
                            <td>
                                <div className="botones-cantidad">
                                    <button type="button">-</button>
                                    <span>1</span>
                                    <button type="button">+</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="carrito-total-container">
                    <p className="carrito-total">Total a pagar: $<span className="carrito-total-monto">999.00</span></p>
                </div>
                <div id="botones-carrito">
                    <button type="button" className="botones-accion-carrito vaciar">Vaciar carrito</button>
                    <button type="button" className="botones-accion-carrito comprar">Comprar</button>
                </div>
            </div>

        </div>

    </nav>
    </>
  )
}

export default Nav