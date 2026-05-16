
export type ProductCatalogType = {
    manga: ProductType[]
    figuras: ProductType[]
    ropa: ProductType[]
    accesorios: ProductType[]
}
export type ProductType = {
    id: number,
    titulo: string,
    descripcion: string,
    precio: number,
    imagen: string,
    alt: string,
    oferta: boolean,
    descuento: number|null,
    precioAnterior: number|null
}



