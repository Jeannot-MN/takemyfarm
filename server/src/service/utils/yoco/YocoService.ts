import axios from "axios";
import { Service } from "typedi";
import { YocoCompletePaymentRequest } from "./YocoCompletePaymentRequest";

@Service()
export class YocoService {

    public async charge(paymentRequest: YocoCompletePaymentRequest) {
        const response = await axios
            .post('https://online.yoco.com/v1/charges/'
                , {
                    token: paymentRequest.token,
                    amountInCents: paymentRequest.amountInCents,
                    currency: 'ZAR',
                }
                , {
                    headers: {
                        'X-Auth-Secret-Key': 'sk_test_bf631e0234rNaW6963b46dc89357',
                    }
                }
            );

        return response;

    }
}