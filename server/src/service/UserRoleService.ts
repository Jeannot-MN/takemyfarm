import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserRole } from "../domain/entities/UserRole";
import { UserRoleRepository } from "../domain/repositories/UserRoleRepository";

@Service()
export class UserRoleService {

    private userRoleRepository: UserRoleRepository;

    constructor(@InjectRepository() userRoleRepository: UserRoleRepository) {
        this.userRoleRepository = userRoleRepository;
    }

    public save(userRole: UserRole): Promise<UserRole> {
        return this.userRoleRepository.save(userRole);
    }
}