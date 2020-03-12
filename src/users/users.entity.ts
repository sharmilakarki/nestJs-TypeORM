import { Roles } from "src/roles/roles.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    active: boolean;

    @Column()
    emailAddress:string;
  
    @ManyToOne(type => Roles, roles => roles.users)
    roles: Roles;
    
}