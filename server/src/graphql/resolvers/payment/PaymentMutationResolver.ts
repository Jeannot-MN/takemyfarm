import { Arg, Mutation, Resolver } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";
import { YocoCompletePaymentRequest } from "../../../service/utils/yoco/YocoCompletePaymentRequest";
import { YocoService } from "../../../service/utils/yoco/YocoService";
import { CompleteOrderInput } from "../../types/payment/CompleteOrderInput";
import { CompleteOrderPayload } from "../../types/payment/CompleteOrderPayload";

@Resolver()
export class PaymentMutationResolver {

    private yocoService: YocoService;

    constructor(){
        this.yocoService = Container.get(YocoService);
    }

    @Mutation(()=>CompleteOrderPayload)
    public completeOrder(@Arg("input") input: CompleteOrderInput){

        let paymentRequest = new YocoCompletePaymentRequest();
        paymentRequest.amountInCents = input.totalAmountInCents;
        paymentRequest.token = input.paymentToken;

        let response: any = this.yocoService.charge(paymentRequest);

        console.log(response);
        
        return new CompleteOrderPayload(true);

    }
}