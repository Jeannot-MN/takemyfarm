import { Entity, PrimaryColumn } from "typeorm";

@Entity("user_role")
export class UserRole {

    @PrimaryColumn()
    private userId: number;

    @PrimaryColumn()
    private roleName: string;

    public getUserId(): number {
        return this.userId;
    }

    public setUserId(userId: number): void {
        this.userId = userId;
    }

    public getRoleId(): string {
        return this.roleName;
    }

    public setRoleId(roleId: string): void {
        this.roleName = roleId;
    }

}