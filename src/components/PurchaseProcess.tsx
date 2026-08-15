

function PurchaseProcess() {
  return (
    <section id="compra"> 
            <h2>Proceso de compra</h2>
            <p>Comprar en nuestra tienda es muy sencillo y seguro, solo debes seguir los siguientes pasos</p>

            <div className="compra-contenedor">
                <div className="compra-imagen">
                    <img src="https://dzt1km7tv28ex.cloudfront.net/u/268211344094789632_35s_d.jpg"
                        alt="Imagen del apartado de compra, es un Nendoroid de Hatsune Miku" id="compra-img"/>
                </div>


                <div className="compra-pasos">
                    <ol id="compra-lista">
                        <li className="compra-paso"><b>Elige el producto que desees comprar </b> - Contamos con un gran
                            catalogo de productos,
                            desde mangas, figuras, ¡hasta hoodies!</li>
                        <li className="compra-paso"><b>Agrega el producto al carrito</b> - Para eso, haz clic en el botón
                            rojo de "Agregar al
                            carrito"</li>
                        <li className="compra-paso"><b>Una vez terminado, revisa tu carrito</b> - Verifica todos los
                            productos que agregaste y
                            entra al proceso de pago</li>
                        <li className="compra-paso"><b>Realiza el pago</b> - Los métodos de pago que aceptamos son los
                            siguientes:
                            <div className="lista-contenedor" id="metodos-pago">
                                <img src="https://www.consumoteca.com/wp-content/uploads/Logo-PayPal-jpg.webp"
                                    alt="Imagen del logo de Paypal" className="lista-contenedor-imagen"/>
                                <img src="https://images.seeklogo.com/logo-png/19/1/mercadopago-logo-png_seeklogo-199533.png"
                                    alt="Imagen del logo de Mercadopago" className="lista-contenedor-imagen"/>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                    alt="Imagen del logo de Mastercard" className="lista-contenedor-imagen"/>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Visa_Inc._logo_%282021%E2%80%93present%29.svg/1920px-Visa_Inc._logo_%282021%E2%80%93present%29.svg.png"
                                    alt="Imagen del logo de VISA" className="lista-contenedor-imagen"/>
                            </div>
                        </li>
                        <li className="compra-paso"><b>Nosotros prepararemos tu pedido</b> - No te preocupes, lo que compres
                            con nosotros llegará a salvo hasta la puerta de tu casa, trabajamos con las
                            mejores paqueterías que hay en Agua Prieta y cuidamos hasta el más pequeñito detalle:
                            <div className="lista-contenedor" id="paqueterias">
                                <img src="https://cdn.worldvectorlogo.com/logos/estafeta.svg"
                                    alt="Imagen de paquetería Estafeta" className="lista-contenedor-imagen"/>
                                <img src="https://1000marcas.net/wp-content/uploads/2020/01/FedEx-logo.jpg"
                                    alt="Imagen de paquetería Fedex" className="lista-contenedor-imagen"/>
                                <img src="https://m.media-amazon.com/images/I/41MVNV00x7L._AC_UF894,1000_QL80_.jpg"
                                    alt="Imagen de paquetería DHL" className="lista-contenedor-imagen"/>
                            </div>
                        </li>
                        <li className="compra-paso"><b>Tiempo estimado</b> - El envío debe llegar a tu casita entre 3 a 7
                            días hábiles
                        </li>
                        <li className="compra-paso"><b>Si tienes algún problema</b> - Por favor, manda mensaje al formulario
                            que se encuentra al final del sitio
                        </li>

                    </ol>

                    <p>Gracias por confiar en nosotros ;w; 💕</p>
                </div>


            </div>
    </section>
  )
}

export default PurchaseProcess
