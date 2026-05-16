import db from "../data/db";
import { useMemo, useState } from "react";

const useCart = () => {
    const [data] = useState(db);

    const [cart, setCart] = useState([]);

    const MIN_ITEMS = 1;
    const MAX_ITEMS = 5;

    const addToCart = (producto) => {
        // Revisar si ya existe el producto en el carrito
        const findProductIndex = cart.findIndex((item) => item.id === producto.id);

        // si llego a la cantidad maxima, que retorne
        // if(cart[findProductIndex].cantidad===MAX_ITEMS) return;

        if (findProductIndex < 0) {
            console.log("No existe, añadiendo");

            // Creo copia del producto y le agrego la cantidad, esto para no romper inmutabilidad
            setCart((prevCart) => [...prevCart, { ...producto, cantidad: 1 }]);
        } else {
            console.log("Ya existe, añadiendo cantidad");

            setCart((prevState) =>
                prevState.map((ele) => {
                    if (ele.id === producto.id && ele.cantidad < MAX_ITEMS) {
                        return {
                            ...ele,
                            cantidad: ele.cantidad + 1,
                        };
                    }
                    return ele;
                }),
            );
        }
    };

    const decreaseQuantity = (id) => {
        setCart((prevState) =>
            prevState.map((item) => {
                if (item.id === id && item.cantidad > MIN_ITEMS) {
                    return {
                        ...item,
                        cantidad: item.cantidad - 1,
                    };
                }
                return item;
            }),
        );
    };

    const increaseQuantity = (id) => {
        setCart((prevState) =>
            prevState.map((ele) => {
                if (ele.id === id && ele.cantidad < MAX_ITEMS) {
                    return {
                        ...ele,
                        cantidad: ele.cantidad + 1,
                    };
                }
                return ele;
            }),
        );
    };

    const emptyCart = () => {
        setCart([]);
    };

    const removeProduct = (id) => {
        setCart((prevState) => prevState.filter((item) => item.id !== id));
    };

    const isEmpty = useMemo(() => cart.length === 0, [cart]);

    const totalToPay = useMemo(
        () =>
            cart.reduce(
                (acumulador, itemActual) =>
                    acumulador + itemActual.precio * itemActual.cantidad,
                0,
            ),
        [cart],
    );

    return {
        data,
        cart,
        addToCart,
        removeProduct,
        decreaseQuantity,
        increaseQuantity,
        emptyCart,
        isEmpty,
        totalToPay,
    };
};

export default useCart;
