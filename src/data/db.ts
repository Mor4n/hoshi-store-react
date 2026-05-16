import { imgPower,imgReze } from "../barrels/assets";
import type {ProductCatalogType} from "../types/types";


const data: ProductCatalogType = {
  manga: [
    {
      id: 1,
      titulo: "HUNTER X HUNTER N.1",
      descripcion: "¡Ya está aquí una de las series más esperadas: Hunter x Hunter de Yoshihiro Togashi!",
      precio: 159.99,
      imagen: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_ep3cqf6n3h56t1cnu6qq84oq78/-S897-FWEBP",
      alt: "Imagen del manga de Hunter x Hunter N.1",
      oferta: false,
      descuento: null,
      precioAnterior: null
    },
    {
      id: 2,
      titulo: "Spy x Family N.2",
      descripcion: "¡Anya fue admitida en la prestigiosa Academia Eden y es hora de poner en marcha la siguiente fase de la misión!",
      precio: 179.00,
      imagen: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_mmio609i556hj3ji40vr0shb4o/-S897-FWEBP",
      alt: "Imagen del manga de Spy x Family N.2",
      oferta: false,
      descuento: null,
      precioAnterior: null
    },
    {
      id: 3,
      titulo: "One Piece N.1",
      descripcion: "Sigue las aventuras de Monkey D. Luffy, un chico que sueña con ser el rey de los piratas",
      precio: 148.72,
      imagen: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_beq94veiv54bf20ff4e2q23d6o/-S897-FWEBP",
      alt: "Imagen del manga de One Piece N.1",
      oferta: true,
      descuento: 12,
      precioAnterior: 169.00
    }
  ],
  figuras: [
    {
      id: 4,
      titulo: "Peluche de Pochita tamaño real",
      descripcion: "Pochita llegó para enternecer tu corazón",
      precio: 64.00,
      imagen: "https://m.media-amazon.com/images/I/616bv-qiXbL.jpg",
      alt: "Imagen de peluche de Pochita",
      oferta: true,
      descuento: 20,
      precioAnterior: 80.00
    },
    {
      id: 5,
      titulo: "Figura Nendoroid - Reze Chainsaw Man",
      descripcion: "Denji, ¿Te considerarías más un ratón de ciudad o de campo?",
      precio: 79.00,
      imagen: imgReze,
      alt: "Imagen de figura nendoroid del personaje Reze",
      oferta: false,
      descuento: null,
      precioAnterior: null
    },
    {
      id: 6,
      titulo: "Figura Nendoroid - Power Chainsaw Man",
      descripcion: "¡YA LLEGÓ POWER!",
      precio: 87.00,
      imagen: imgPower,
      alt: "Imagen de figura del personaje Power",
      oferta: false,
      descuento: null,
      precioAnterior: null
    }
  ],
  ropa: [
    {
      id: 7,
      titulo: "Sudadera de Itachi Uchiha",
      descripcion: "Te falta odio Sasuke",
      precio: 148.72,
      imagen: "https://artesublim.com/wp-content/uploads/2024/04/2-3.jpg",
      alt: "Imagen de Sudadera de Itachi Uchiha",
      oferta: true,
      descuento: 12,
      precioAnterior: 169.00
    },
    {
      id: 8,
      titulo: "Sudadera de Kimetsu no Yaiba",
      descripcion: "¡Respiración del Agua!",
      precio: 521.99,
      imagen: "https://m.media-amazon.com/images/I/51De917fB6L._AC_SY1000_.jpg",
      alt: "Imagen de Sudadera de Kimetsu no Yaiba",
      oferta: false,
      descuento: null,
      precioAnterior: null
    },
    {
      id: 9,
      titulo: "Sudadera de Dragon Ball",
      descripcion: "Desata tu Super Saiyajin Fase 20 con esta sudadera",
      precio: 599.00,
      imagen: "https://resources.sears.com.mx/medios-plazavip/mkt/63b4fc95029dc_sudadera-dragon-ball-goku-claroshoppng.jpg?scale=500&qlty=75",
      alt: "Imagen de Sudadera de Dragon Ball",
      oferta: false,
      descuento: null,
      precioAnterior: null
    }
  ],
  accesorios: [
    {
      id: 10,
      titulo: "Pin de Pochita",
      descripcion: "¡El poder de la motosierra en tu mochila, gorra o chamarra!",
      precio: 372.00,
      imagen: "https://m.media-amazon.com/images/I/51LLAMSg1tL._AC_SX679_.jpg",
      alt: "Imagen de Pin de Pochita",
      oferta: false,
      descuento: null,
      precioAnterior: null
    },
    {
      id: 11,
      titulo: "Stickers de Berserk",
      descripcion: "El espadachín errante podrá estar en todo lugar (incluso puedes pegarlos en el gabinete de tu PC)",
      precio: 20.00,
      imagen: "https://m.media-amazon.com/images/I/61JCiWwddfL._AC_SX679_.jpg",
      alt: "Imagen de stickers de Berserk",
      oferta: true,
      descuento: 50,
      precioAnterior: 40.00
    },
    {
      id: 12,
      titulo: "Reloj de bolsillo de Fullmetal Alchemist",
      descripcion: "¡Es un intercambio equivalente! Te daré la mitad de mi vida, así que dame la mitad de la tuya 💕",
      precio: 328.99,
      imagen: "https://m.media-amazon.com/images/I/61FBCW6K58S._AC_SX679_.jpg",
      alt: "Imagen de Reloj de bolsillo de Fullmetal Alchemist",
      oferta: false,
      descuento: null,
      precioAnterior: null
    }
  ]
};

export default data;