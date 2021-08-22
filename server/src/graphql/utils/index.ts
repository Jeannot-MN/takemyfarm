import { Roles } from "../../domain/entities/Roles";
import { User } from "../../domain/entities/User";

export function isAdmin(user: User | null): boolean {
    return hasRole(user, Roles.SYSADMIN);
}

export function isSeller(user: User | null ): boolean {
    return hasRole(user, Roles.SELLER);
}

export function hasRole(user: User | null, role: Roles): boolean {
    if (user === null) {
        return false;
    } else {
        const roles = user.roles.map((role) => role.name);
        return roles.indexOf(role.toString()) >= 0;
    }
}

export function isAuthenticated(user: User | null): boolean {
    return user ? true : false;
}