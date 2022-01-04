import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { UserRole } from "../entities/UserRole";

@Service()
@EntityRepository(UserRole)
export class UserRoleRepository extends Repository<UserRole> {

}