import TeamCard from './common/TeamCard'
import { aguaprieta } from '../barrels/assets'

function About() {
  return (
    <>
    <section id="sobre"> 
            <h2>Sobre nosotros</h2>
            <p>Gracias por interesarte en nosotros ⭐</p>
            <div className="sobre-contenedor">
                <div className="sobre-textos">

                    <p className="sobre-texto">
                        <span className="hoshi">Hoshi-Store</span> fue fundado en diciembre de 2025, comenzamos primero con entregas a domicilio,luego
                        poco a poco hemos ido creciendo y todos los días entrenamos para ser no una tienda, sino la
                        mejor tienda que te dé servicio a ti.
                    </p>
                    <p className="sobre-texto">Nos encanta todo lo relacionado al anime, manga y cultura japonesa.</p>
                    <p className="sobre-texto">Esta mini-empresa nació de querer compartir un poco de la cultura japonesa en
                        Agua Prieta.</p>
                    <p className="sobre-texto">El porque de nuestro nombre: Queriamos algo que fuera a lo que anhelamos, y
                        todos queremos alcanzarlas: las estrellas, <span className="hoshi">Hoshi</span> significa eso, <span
                            className="hoshi">estrella ⭐</span>, el store es porque
                        en este momento somos una tienda, pero queremos ser en el futuro una comunidad en la que te
                        puedas sentir comodo.</p>

                </div>
                <div className="sobre-contenedor-imagen">
                    <img src={aguaprieta} alt="Imagen de Agua Prieta" id="sobre-imagen"/>
                </div>

            </div>



            <div id="equipo" className="equipo-section">
                <h2>Te queremos presentar a las personas que forman parte del equipo</h2>

                <div className="equipo-contenedor">

                    <TeamCard img={"https://i.pinimg.com/736x/72/94/07/729407bac6ce89fe87c3004a070e8342.jpg"} location={"Agua Prieta, Sonora"} name={"Adriana"}  role={"CEO"}  />

                    <TeamCard img={"https://pbs.twimg.com/media/EohdvKnXYAAGK9V.png"} location={"Agua Prieta, Sonora"} name={"Reyna"}  role={"Marketing"}  />

                    <TeamCard img={"https://pbs.twimg.com/media/GtmQPzVacAAZCsU?format=jpg&name=900x900"} location={"Agua Prieta, Sonora"} name={"Brayan"}  role={"Programador"}  />
                    

                </div>
            </div>

        </section>

    </>
  )
}

export default About