import { carrito, logo, lupa } from '../barrels/assets'
import type { ProductCartItem,ProductType } from '../types/types'

type NavProps ={
    cart:ProductCartItem[],
    increaseQuantity:(id:ProductType['id'])=>void,
    decreaseQuantity:(id:ProductType['id'])=>void ,
    removeProduct: (id: ProductType['id']) => void,
    emptyCart:()=>void,
    isEmpty:boolean,
    totalToPay:number,
    searchTerm: string,
    setSearchTerm: (term: string) => void,
}

function Nav( {cart,
    increaseQuantity,
    decreaseQuantity ,
    emptyCart,
    removeProduct,
    isEmpty,
    totalToPay,
    searchTerm,
    setSearchTerm}: NavProps ) {



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
            <input 
                type="text" 
                placeholder="Ingrese aquí el producto a buscar" 
                id="buscar-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        const catalogElem = document.getElementById('catalogo');
                        if (catalogElem) catalogElem.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            />
            <button 
                type="button" 
                id="buscar-boton"
                aria-label="Buscar producto"
                onClick={() => {
                    const catalogElem = document.getElementById('catalogo');
                    if (catalogElem) catalogElem.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <img src={lupa} alt="Ícono de lupa" id="buscar-imagen"/>
            </button>
        </div>

        <div className="carrito-contenedor">
            <button type="button" id="carrito-boton">
                <img src={carrito} alt="Imagen de carrito de compras" id="carrito-compras"/>
            </button>

            <div id="carrito">
                { !isEmpty ?(
                    <>
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
                        {
                        cart.map( item => (
                        <tr key={item.id}>
                            <td><img src={item.imagen} alt="" /></td>
                            <td>{item.titulo}</td>
                            <td>${item.precio}</td>
                            <td>
                                <div className="botones-cantidad">
                                    <button type="button" onClick={()=>decreaseQuantity(item.id)} >-</button>
                                    <span>{item.cantidad}</span>
                                    <button type="button" onClick={()=>increaseQuantity(item.id)}>+</button>
                                    <button type="button" onClick={()=>removeProduct(item.id)}>✖</button>
                                </div>
                            </td>
                        </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="carrito-total-container">
                    <p className="carrito-total">Total a pagar: $<span className="carrito-total-monto">{totalToPay.toFixed(2)}</span></p>
                </div>
                <div id="botones-carrito">
                    <button type="button" className="botones-accion-carrito vaciar" onClick={()=>emptyCart()}>Vaciar carrito</button>
                    <button type="button" className="botones-accion-carrito comprar">Comprar</button>
                </div>
                    </>
            
            ): <p>Agregue productos a su carrito!</p>}
            </div>

        </div>

    </nav>
    </>
  )
}

export default Nav