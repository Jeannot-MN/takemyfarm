import * as React from 'react';
import { useLocalStorage } from 'react-use';

export interface SellerContextType {
    seller?: Seller;
    setSeller: (seller: Seller) => void;
}

export const SellerContext = React.createContext<SellerContextType>({
    setSeller: () => { },
})

interface Props {
    children: React.ReactNode
}

export const SellerContextProvider = ({ children }: Props) => {
    const [sellerInLocalStorage, setSellerInLocalStorage] = useLocalStorage<Seller | null>('seller', null)
    const [seller, setSeller] = React.useState<Seller| null| undefined>(sellerInLocalStorage);
    const value = React.useMemo(() => ({ seller, setSeller }), [seller, setSeller]);

    console.log(sellerInLocalStorage);
    
    return (
        //@ts-ignore
        <SellerContext.Provider value={value} > {children} </SellerContext.Provider>
    );
}

export type Seller = {
    id: number;
    name: string;
    description: string;
    email: string;
    mobileNumber: string;
    address: {
        city: string;
        postCode: string;
        province?: string | null;
        street: string;
        suburb: string;
    };
    bannerImage?: string | null;
    status: string;
};