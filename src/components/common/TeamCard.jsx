import React from 'react'

function TeamCard({img,name,location,role}) {
  return (
    <>
    <article className="equipo-card">
                        <img src={img}
                            alt="Foto de perfil de Adriana" className="equipo-foto"/>
                        <h3 className="equipo-nombre">{name}</h3>
                        <h4 className="equipo-ubicacion">{location}</h4>
                        <p className="equipo-rol">"{role}"</p>
                        <a href="https://github.com/Mor4n/proyecto-Final-modulo-2.github.io"  target="_blank" className="equipo-boton">Github</a>
                        <a href="https://linkedin.com/" target="_blank" className="equipo-boton">Linkedin</a>
                        <a href="https://twitter.com/"  target="_blank" className="equipo-boton">Twitter</a>
                        <a href="https://www.instagram.com/" target="_blank" className="equipo-boton">Instagram</a>
                        <a href="https://www.youtube.com/" target="_blank" className="equipo-boton">Youtube</a>
    </article>
    </>
  )
}

export default TeamCard