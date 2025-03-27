import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Unique } from "typeorm";

@Entity("users")
@Unique(["email"])
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column() 
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    age: number

    @Column()
    ativo: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}

export { User }