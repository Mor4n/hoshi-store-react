import React from 'react'

function Contact() {
  return (
     <section id="contacto" className="contacto-section">
            

            <div className="contacto-form-div">
                <form className="contacto-form">
                    <h3>Mandar ticket</h3>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Ingrese su nombre"/>

                    <label htmlFor="correo">Correo electrónico</label>
                    <input type="email" id="correo" placeholder="Ingresa tu correo de la forma: correo@correo.com"/>

                    <label htmlFor="archivo" id="input-arch">Toca aquí para añadir una imagen o archivo</label>
                    <input type="file" id="archivo"/>

                    <label htmlFor="solicitud">Mensaje</label>
                    <textarea id="solicitud" placeholder="Ingresa tu mensaje para la solicitud aquí "></textarea>



                    <button type="submit">Enviar mensaje</button>
                </form>
            </div>

            <div className="contacto-info">
                <h2>Contacto</h2>
                <p>Si tienes alguna duda respecto a nuestros productos o necesitas soporte técnico por algún pedido, o simplemente, quieres enviarnos una foto para añadirla a la galería, llena el formulario que está aquí a la <span className="hoshi">izquierda</span> o por
                    favor, envíanos un mensaje por los siguientes medios:</p>
                <p><b>Correo electrónico:</b> tiendita@tiendita.com</p>
                <p><b>Número de teléfono:</b> 632-350-3000</p>
            </div>

        </section>
  )
}

export default Contact