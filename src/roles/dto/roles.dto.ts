import { User } from "src/users/users.entity";

export class RolesDto{
    id: number;
    roleType: string;
    description: string;
    users:User[];
}