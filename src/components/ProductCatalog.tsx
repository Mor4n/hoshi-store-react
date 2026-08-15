import { useMemo } from 'react';
import type { ProductCatalogType, ProductType } from '../types/types';

type ProductCatalogProps = {
    data: ProductCatalogType;
    addToCart: (item: ProductType) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
};

const CATEGORIES = [
    { id: 'todos', label: 'Todos' },
    { id: 'manga', label: 'Manga' },
    { id: 'figuras', label: 'Figuras' },
    { id: 'ropa', label: 'Ropa' },
    { id: 'accesorios', label: 'Accesorios' },
];

function ProductCatalog({
    data,
    addToCart,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
}: ProductCatalogProps) {
    const filteredData = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        const result: Partial<ProductCatalogType> = {};

        const entries = Object.entries(data) as [keyof ProductCatalogType, ProductType[]][];

        for (const [category, productos] of entries) {
            if (selectedCategory !== 'todos' && selectedCategory !== category) {
                continue;
            }

            const matchingProducts = productos.filter((producto) => {
                if (!term) return true;
                return (
                    producto.titulo.toLowerCase().includes(term) ||
                    producto.descripcion.toLowerCase().includes(term)
                );
            });

            if (matchingProducts.length > 0) {
                result[category] = matchingProducts;
            }
        }

        return result;
    }, [data, selectedCategory, searchTerm]);

    const totalProductsCount = useMemo(() => {
        return Object.values(filteredData).reduce(
            (total, prods) => total + (prods ? prods.length : 0),
            0
        );
    }, [filteredData]);

    const handleCategoryClick = (categoryId: string) => {
        if (selectedCategory === categoryId && categoryId !== 'todos') {
            setSelectedCategory('todos');
        } else {
            setSelectedCategory(categoryId);
        }
    };

    return (
        <>
            <section id="catalogo">
                <h2>CATALOGO</h2>
                <p>Compra productos que vienen de Japón, directo a la puerta de tu casa!</p>

                <div className="catalogo-categorias">
                    {CATEGORIES.map(({ id, label }) => (
                        <button
                            key={id}
                            type="button"
                            className={`catalogo-categoria ${selectedCategory === id ? 'activa' : ''}`}
                            onClick={() => handleCategoryClick(id)}
                        >
                            <p className="catalogo-categoria-texto">{label}</p>
                        </button>
                    ))}
                </div>

                {searchTerm.trim() && (
                    <div className="catalogo-busqueda-info">
                        <p>
                            Resultados para "<strong>{searchTerm}</strong>" ({totalProductsCount}{' '}
                            {totalProductsCount === 1 ? 'producto' : 'productos'} encontrados)
                        </p>
                        <button
                            type="button"
                            className="limpiar-busqueda-btn"
                            onClick={() => setSearchTerm('')}
                            title="Limpiar búsqueda"
                        >
                            ✕
                        </button>
                    </div>
                )}

                {totalProductsCount === 0 ? (
                    <div className="catalogo-vacio">
                        <p>
                            No se encontraron productos
                            {searchTerm ? ` para "${searchTerm}"` : ''}
                            {selectedCategory !== 'todos' ? ` en la categoría "${selectedCategory}"` : ''}.
                        </p>
                        <button
                            type="button"
                            className="producto-btn catalogo-reset-btn"
                            onClick={() => {
                                setSelectedCategory('todos');
                                setSearchTerm('');
                            }}
                        >
                            Ver todos los productos
                        </button>
                    </div>
                ) : (
                    Object.entries(filteredData).map(([categoria, productos]) => (
                        <div className="catalogo-contenedor" id={categoria} key={categoria}>
                            <h3>{categoria}</h3>
                            <div className="catalogo-productos">
                                {productos?.map((producto) => (
                                    <article className="producto-tarjeta" key={producto.id}>
                                        {producto.descuento != null ? (
                                            <span className="producto-badge">OfertONN</span>
                                        ) : (
                                            ''
                                        )}
                                        <img
                                            src={producto.imagen}
                                            alt={producto.alt}
                                            className="producto-img"
                                        />
                                        <h3 className="producto-titulo">{producto.titulo}</h3>
                                        <p className="producto-info">
                                            <em>{producto.descripcion}</em>
                                        </p>
                                        {producto.descuento != null ? (
                                            <div className="producto-precios-div">
                                                <p className="producto-descuento">-{producto.descuento}%</p>
                                                <p className="producto-precio">${producto.precio.toFixed(2)}</p>
                                                <p className="producto-precio-anterior">
                                                    <s>${producto.precioAnterior?.toFixed(2)}</s>
                                                </p>
                                            </div>
                                        ) : (
                                            <p className="producto-precio">${producto.precio.toFixed(2)}</p>
                                        )}
                                        <button
                                            className="producto-btn"
                                            onClick={() => {
                                                addToCart(producto);
                                            }}
                                        >
                                            Agregar al carrito
                                        </button>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </section>
        </>
    );
}

export default ProductCatalog;