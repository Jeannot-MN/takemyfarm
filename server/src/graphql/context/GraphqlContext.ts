import { Request } from "express";
import { Roles } from "../../domain/entities/Roles";
import { User } from "../../domain/entities/User";

export class GraphqlContext {

    constructor(
        request: Request,
        user: User | null,
    ){
        this.request = request;
        this.user = user;
    }
    
    private request: Request;

    private user: User | null;

    public getRequest(): Request {
        return this.request;
    }

    public setRequest(request: Request): void {
        this.request = request;
    }

    public getUser(): User | null {
        return this.user;
    }

    public setUser(user: User): void {
        this.user = user;
    }

    public isAdmin(): boolean {
        return this.hasRole(Roles.SYSADMIN);
    }

    public isSeller(): boolean {
        return this.hasRole(Roles.SELLER);
    }

    public hasRole(role: Roles): boolean{
        if(this.user === null){
            return false;
        } else {
            return this.user.getRoles().map((role) => role.getName()).indexOf(role.toString()) >= 0;
        }
    }

    public isAuthenticated(): boolean {
        return this.user !== null;
    }
}