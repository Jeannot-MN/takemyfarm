import { useCallback, useEffect } from "react";

interface ShowPopUpProps {
    amountInCents: number;
    currency?: string;
    title: string;
    description: string;
    onTokenSuccessful: (result: any) => void;
}
export function useYocoPopUp(publicKey: string){
    const showYocoPaymentPopUp = useCallback((params: ShowPopUpProps) =>{
        //@ts-ignore
        let yoco : any = new window.YocoSDK({
            publicKey: publicKey,
        });
        yoco.showPopup({
            amountInCents: params.amountInCents,
            currency: params.currency || 'ZAR',
            name: params.title,
            description: params.description,
            callback: function (result: any) {
                // This function returns a token that your server can use to capture a payment
                if (result.error) {
                    const errorMessage = result.error.message;
                    console.error("error occured: " + errorMessage);
                } else {
                    console.log("card successfully tokenised: " + result.id);
                    params.onTokenSuccessful(result);
                }
                // In a real integration - you would now pass this chargeToken back to your
                // server along with the order/basket that the customer has purchased.
            }
        })
    }, [publicKey]);

    return {
        showYocoPaymentPopUp
    }
}