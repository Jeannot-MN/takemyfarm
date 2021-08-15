import * as argon2 from "argon2";
import { Service } from "typedi";

@Service()
export class PasswordEnconderService {

    public async encode (clearTextPassword: string): Promise<string> {
        try{
            const hashedPassword = await argon2.hash(clearTextPassword);
            return hashedPassword;
        } catch(e){
            throw new Error("System cannot complete your request. Password hashing failed.")
        }
    }
}