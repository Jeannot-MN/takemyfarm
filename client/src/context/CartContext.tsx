import * as React from 'react';
import { useLocalStorage } from 'react-use';
import { ProductDto } from '../generated/graphql';

export interface CartContextType {
    cart: Cart;
    setCart: (cart: Cart) => void;
}

export const CartContext = React.createContext<CartContextType>({
    cart: { items: [] },
    setCart: () => { },
})

interface Props {
    children: React.ReactNode
}

export const CartContextProvider = ({ children }: Props) => {
    const [cartInLocalStorage, setCartInLocalStorage] = useLocalStorage<Cart>('cart', { items: [] })
    const [cart, setCart] = React.useState<Cart>(cartInLocalStorage || { items: [] });
    const value = React.useMemo(() => ({ cart, setCart }), [cart, setCart]);

    console.log(cartInLocalStorage);

    return (
        //@ts-ignore
        <CartContext.Provider value={value} > {children} </CartContext.Provider>
    );
}

export type CartItem = {
    product: ProductDto,
    quantity: number,
    expiresAt: number
}

export type Cart = {
    items: CartItem[]
};