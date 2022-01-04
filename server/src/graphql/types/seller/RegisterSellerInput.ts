import { Field, InputType } from "type-graphql";
import AddressInput from "../address/AddressInput";
import { RegisterUserInput } from "../user/RegisterUserInput";

@InputType()
export class RegisterSellerInput{

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    email: string;

    @Field()
    mobileNumber: string;

    @Field()
    user: RegisterUserInput;

    @Field()
    address: AddressInput
}