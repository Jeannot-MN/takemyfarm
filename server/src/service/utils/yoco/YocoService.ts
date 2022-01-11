import axios from "axios";
import { Service } from "typedi";
import { YocoCompletePaymentRequest } from "./YocoCompletePaymentRequest";

@Service()
export class YocoService {

    public charge(paymentRequest: YocoCompletePaymentRequest) {
        axios
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
            )
            .then(res => {
                // res.status will contain the HTTP status code
                // res.data will contain the response body
                return res;
            })
            .catch(error => {
                throw Error(error.message)
            })
    }
}