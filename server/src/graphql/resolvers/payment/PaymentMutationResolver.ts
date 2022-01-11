import { Arg, Mutation, Resolver } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";
import { Order } from "../../../domain/entities/Order";
import { OrderItem } from "../../../domain/entities/OrderItem";
import { OrderService } from "../../../service/OrderService";
import { YocoCompletePaymentRequest } from "../../../service/utils/yoco/YocoCompletePaymentRequest";
import { YocoService } from "../../../service/utils/yoco/YocoService";
import { CompleteOrderInput } from "../../types/payment/CompleteOrderInput";
import { CompleteOrderPayload } from "../../types/payment/CompleteOrderPayload";

@Resolver()
export class PaymentMutationResolver {

    private yocoService: YocoService;
    private orderService: OrderService;

    constructor() {
        this.yocoService = Container.get(YocoService);
        this.orderService = Container.get(OrderService);
    }

    @Mutation(() => CompleteOrderPayload)
    public async completeOrder(@Arg("input") input: CompleteOrderInput) {

        let paymentRequest = new YocoCompletePaymentRequest();
        paymentRequest.amountInCents = input.totalAmountInCents;
        paymentRequest.token = input.paymentToken;

        let response: any = await this.yocoService.charge(paymentRequest);

        if (response.status === 201) {
            let order = new Order();
            order.userId = input.userId;
            order.totalAmount = input.totalAmountInCents / 100;
            order.items = input.items.map(item => {
                let orderItem = new OrderItem();
                orderItem.productId = item.productId;
                orderItem.quantity = item.quantity;
                return orderItem;
            });

            await this.orderService.save(order);
            
            return new CompleteOrderPayload(true);
        }

        throw new Error("Payment failed. " + response.errorMessage);
    }
}