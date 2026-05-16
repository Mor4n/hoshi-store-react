# Hoshi-Store

Hoshi-Store es una tienda web construida con React, TypeScript y Vite. El proyecto es una tienda de productos de anime, manga, figuras, ropa y accesorios, con una interfaz tipo manga y un carrito de compras persistente en `localStorage`.

## Vista general

La app esta pensada como una presentacion de marca y al mismo tiempo como una tienda funcional. Incluye un catalogo de productos por categorias, una barra de navegacion con carrito, secciones informativas sobre el proceso de compra, la historia del negocio, una galeria de la comunidad y un formulario de contacto.

## Caracteristicas funcionales

- Catalogo de productos organizado por categoria.
- Carrito de compras con agregar, aumentar, disminuir, eliminar y vaciar carrito.
- Persistencia del carrito usando `localStorage`.
- Costo total calculado automaticamente.
- Secciones de marca: sobre nosotros, proceso de compra, fotos de la comunidad y contacto.


## Tecnologias

- React 19
- TypeScript
- Vite
- CSS puro

## Características técnicas

- Tipado fuerte con TypeScript para productos, carrito y props de componentes.
- Custom hook `useCart` para centralizar la logica del carrito.
- Persistencia de estado en `localStorage` para conservar el carrito entre sesiones.
- Separacion por componentes reutilizables y secciones bien definidas.
- Datos locales tipados con una estructura compartida en `src/types/types.ts`.
- Calculo derivado de estado con `useMemo` para optimizar `isEmpty` y el total a pagar.
- Manejo de estado con `useState` y efectos de sincronizacion con `useEffect`.
- Proyecto montado con Vite.

## Lo que demuestra este proyecto

- Modelado de datos con tipos reutilizables y consistentes.
- Separacion de responsabilidades entre UI, estado, datos y utilidades.
- Manejo de estado local con un hook personalizado.
- Persistencia de informacion de usuario entre sesiones.
- Uso de componentes presentacionales y contenedores simples.
- Base lista para escalar hacia API, autenticacion o checkout real.

## Arquitectura técnica

- `src/types/types.ts` define la forma de los productos y del carrito.
- `src/data/db.ts` funciona como fuente local de datos para el catalogo.
- `src/hooks/useCart.ts` concentra la logica de negocio del carrito.
- `src/components/` contiene las secciones visuales reutilizables.
- `src/App.tsx` ensambla la pagina principal y conecta la informacion.

## Estructura principal

- `src/App.tsx`: composicion principal de la pagina.
- `src/hooks/useCart.ts`: logica del carrito y persistencia.
- `src/data/db.ts`: base de datos local de productos.
- `src/types/types.ts`: tipos compartidos del proyecto.
- `src/components/`: componentes de UI y secciones de la pagina.
- `src/barrels/assets.ts`: exportacion centralizada de imagenes y video.

## Requisitos

- Node.js 18 o superior.
- npm.

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build de produccion

```bash
npm run build
```

## Notas del proyecto

Este proyecto usa datos locales para simular el catalogo y el carrito, por lo que no depende de una API externa. Lo usé como aprendizaje para aprender sobre manejo de componentes, tipos, estado, persistencia local y estructura modular.

## Posibles mejoras

- Integrar una API real para productos.
- Agregar busqueda y filtrado en el catalogo.
- Crear autenticacion y un flujo de checkout mas completo.
- Conectar el formulario de contacto a un backend o servicio de email.

