import * as React from 'react';
import { useLocalStorage } from 'react-use';
import { ProductDto } from '../generated/graphql';

export interface CartContextType {
    cart: Cart;
    updateCart: (cart: Cart) => void;
    itemIsInCart: (itemId: number) => boolean;
    addItemToCart: (item: ProductDto) => void;
    removeItemFromCart: (itemId: number) => void;
    decrementItemQuantity: (itemId: number) => void;
}

export const CartContext = React.createContext<CartContextType>({
    cart: { items: [] },
    updateCart: () => { },
    itemIsInCart: () => false,
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    decrementItemQuantity: () => { },
})

interface Props {
    children: React.ReactNode
}

export const CartContextProvider = ({ children }: Props) => {
    const [cartInLocalStorage, setCartInLocalStorage] = useLocalStorage<Cart>('cart', { items: [] })
    const [cart, setCart] = React.useState<Cart>(cartInLocalStorage || { items: [] });

    const itemIsInCart = React.useCallback((itemId: number) => {
        return cart.items.filter(item => item.product.id === itemId).length > 0;
    }, [cart]);

    const updateCart = React.useCallback((cart: Cart) => {
        setCart(cart);
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [setCart]);

    const addItemToCart = React.useCallback((item: ProductDto) => {
        let newCart: Cart;
        if (itemIsInCart(item.id)) {
            newCart = {
                ...cart,
                items: cart.items.map(existingItem => {
                    if (existingItem.product.id === item.id) {
                        existingItem.quantity = existingItem.quantity + 1;
                    }
                    return existingItem;
                })
            }
        } else {
            const newItem = {
                product: item,
                quantity: 1,
                expiresAt: new Date().getTime() + 24 * 60 * 60 * 1000 //Expires in 1 day
            }

            newCart = {
                ...cart,
                items: [
                    ...cart.items,
                    newItem
                ]
            }
        }
        updateCart(newCart);
    }, [cart, updateCart, itemIsInCart]);

    const removeItemFromCart = React.useCallback((itemId: number) => {
        const newCart: Cart = {
            ...cart,
            items: cart.items.filter(item => item.product.id !== itemId)
        }
        updateCart(newCart);
    }, [cart, updateCart]);

    const decrementItemQuantity = React.useCallback((itemId: number) => {
        if (cart.items.length === 1) {
            removeItemFromCart(itemId);
        } else if (itemIsInCart(itemId)) {
            let newCart: Cart = {
                ...cart,
                items: cart.items.map(existingItem => {
                    if (existingItem.product.id === itemId) {
                        existingItem.quantity = existingItem.quantity - 1;
                    }
                    return existingItem;
                })
            }
            updateCart(newCart);
        }
    }, [cart, updateCart]);


    const value = React.useMemo(() => ({ cart, updateCart, addItemToCart, removeItemFromCart, itemIsInCart, decrementItemQuantity })
        , [cart, updateCart, addItemToCart, removeItemFromCart, itemIsInCart, decrementItemQuantity]);

    return (
        //@ts-ignore
        <CartContext.Provider value={value} > {children} </CartContext.Provider>
    );
}

export type CartItemProps = {
    product: ProductDto,
    quantity: number,
    expiresAt: number
}

export type Cart = {
    items: CartItemProps[]
};