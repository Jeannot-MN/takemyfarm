import * as argon2 from "argon2";
import { Service } from "typedi";

@Service()
export class PasswordEnconderService {

    public async encode (clearTextPassword: string): Promise<string> {
        try{
            const hashedPassword = await argon2.hash(clearTextPassword);
            return hashedPassword;
        } catch(e){
            console.log(e.getMessage());
            throw new Error("System cannot complete your request. Password hashing failed.");
        }
    }

    public async match (password: string, hashedPassword: string): Promise<boolean> {
        try{
            const matched = await argon2.verify(hashedPassword, password);
            return matched;
        } catch(e){
            console.log(e.getMessage());
            throw new Error("System cannot complete your request. Password verification failed.");
        }
    }
}