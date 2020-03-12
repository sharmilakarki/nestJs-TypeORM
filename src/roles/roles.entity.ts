import { User } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Roles {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    description: string;

    @OneToMany(type => User, users => users.roles)
    users: User[];
}