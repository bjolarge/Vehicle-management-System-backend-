import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Feedback {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
     name:string;
     @Column()
    email:string;
    @Column()
    feedback:string;
}
