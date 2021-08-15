import { User } from "src/domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";

@Service()
export class UserService {

    private userRepository: UserRepository;

    constructor(@InjectRepository() userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public findAll(): Promise<User[]> {
        return this.userRepository.findAll();
    }
}