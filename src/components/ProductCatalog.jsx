
import React from 'react'

function ProductCatalog({ data, addToCart }) {



    return (
        <>
            <section id="catalogo">
                <h2>CATALOGO</h2>
                <p>Compra productos que vienen de Japón, directo a la puerta de tu casa!</p>

                <div className="catalogo-categorias">
                    <article className="catalogo-categoria">
                        <p className="catalogo-categoria-texto">Manga</p>
                    </article>
                    <article className="catalogo-categoria">
                        <p className="catalogo-categoria-texto">Figuras</p>
                    </article>
                    <article className="catalogo-categoria">
                        <p className="catalogo-categoria-texto">Ropa</p>
                    </article>
                    <article className="catalogo-categoria">
                        <p className="catalogo-categoria-texto">Accesorios</p>
                    </article>
                </div>

                {
                    Object.entries(data).map(
                        ([categoria, productos]) => (

                                <div className="catalogo-contenedor" id={categoria} key={categoria}>
                                    <h3>{categoria}</h3>
                                    <div className="catalogo-productos">
                                        {
                                            productos.map(producto => (

                                                    <article className="producto-tarjeta" key={producto.id}>
                                                        {producto.descuento != null ? <span className="producto-badge">OfertONN</span> : ""}
                                                        <img src={producto.imagen}
                                                            alt={producto.alt} className="producto-img" />
                                                        <h3 className="producto-titulo">{producto.titulo}</h3>
                                                        <p className="producto-info"><em>{producto.descripcion}</em></p>
                                                        {
                                                            producto.descuento != null ?
                                                                <div className="producto-precios-div">
                                                                    <p className="producto-descuento">-{producto.descuento}%</p>
                                                                    <p className="producto-precio">${producto.precio.toFixed(2)}</p>
                                                                    <p className="producto-precio-anterior"><s>${producto.precioAnterior.toFixed(2)}</s></p>
                                                                </div>
                                                                :
                                                                <p className="producto-precio">${producto.precio.toFixed(2)}</p>
                                                        }
                                                        <button className="producto-btn" onClick={()=>{addToCart(producto)}}>Agregar al carrito</button>
                                                    </article>

                                            ))

                                        }
                                    </div>

                                </div>

                        )


                    )
                }


            </section>

        </>
    )
}

export default ProductCatalog