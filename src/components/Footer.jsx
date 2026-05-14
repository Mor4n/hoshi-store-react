import React from 'react'

function Footer() {
  return (
    <footer id="footer">
        <section class="footer-section">
            <h2 class="footer-titulo"> Síguenos en tooodas nuestras redes sociales</h2>
            <ul class="footer-lista">
                <li><a href="https://www.facebook.com/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/960px-2021_Facebook_icon.svg.png" alt="Imagen de logo de Facebook"/></a></li>
                <li><a href="https://tiktok.com/" target="_blank"><img src="https://static.vecteezy.com/system/resources/thumbnails/023/986/492/small/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png" alt="Imagen de logo de Tiktok"/></a></li>
                <li><a href="https://x.com/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/960px-Logo_of_Twitter.svg.png" alt="Imagen de logo de Twitter que ahorita es X" /></a></li>
                <li><a href="https://www.youtube.com/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/YouTube_full-color_icon_%282024%29.svg/1280px-YouTube_full-color_icon_%282024%29.svg.png" alt="Imagen de logo de Youtube" srcset=""/></a></li>
            </ul>
        </section>

        <p id="footer-copyright">&copy; Diciembre 2025 - Derechos reservados a Hoshi-Store </p>
    </footer>
  )
}

export default Footer