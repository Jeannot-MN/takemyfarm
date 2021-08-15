import { Service } from "typedi";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

const getUserRepository = () => {
    return getRepository(User);
}

export default getUserRepository;

@Service()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
    
    public findAll(){
        return this.find({});
    }
}