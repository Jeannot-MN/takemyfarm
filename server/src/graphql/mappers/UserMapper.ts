import { Service } from "typedi";
import { User } from "../../domain/entities/User";
import { RegisterUserInput } from "../types/user/RegisterUserInput";

@Service()
export class UserMapper {

    public registerUserInputToUser(source: RegisterUserInput): User {
        const target = new User();
        target.setName(source.getName());
        target.setSurname(source.getSurname())
        target.setEmail(source.getEmail());
        target.setMobileNumber(source.getMobileNumber());

        return target;
    }
}