import { getRepository } from "typeorm";
import { User } from "../entities/User";

const getUserRepository = () => {
    return getRepository(User);
}

export default getUserRepository;