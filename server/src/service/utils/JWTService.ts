import * as jwt from "jsonwebtoken";
import { Service } from "typedi";
import { User } from "../../domain/entities/User";

@Service()
export class JWTService {

    public generateToken(user: User): string {
        try {
            const token = jwt.sign(
                {
                    email: user.getEmail(),
                    roles: user.getRoles()

                },
                "FIXME JSON TOKEN SECRET",
                {
                    expiresIn: "2h"
                }
            );

            return token;
        } catch (e) {
            console.log(e.getMessage());
            throw new Error("System cannot complete your request. Failed to generate a token.");
        }
    }
}