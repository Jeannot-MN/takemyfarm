import { Service } from "typedi";
import { User } from "../../domain/entities/User";
import { RegisterUserInput } from "../types/user/RegisterUserInput";
import { UserDTO } from "../types/user/UserDTO";

@Service()
export class UserMapper {

    public registerUserInputToUser(source: RegisterUserInput): User {
        const target = new User();
        target.name = source.name;
        target.surname = source.surname;
        target.email = source.email;
        target.mobileNumber = source.mobileNumber;
        target.profileImageUri = source.profileImageUri;

        return target;
    }

    public userToUserDTO(source: User): UserDTO {
        const target = new UserDTO();
        target.id = source.id;
        target.name = source.name;
        target.surname = source.surname;
        target.email = source.email;
        target.mobileNumber = source.mobileNumber;
        target.profileImageUri = source.profileImageUri;

        return target;
    }
}