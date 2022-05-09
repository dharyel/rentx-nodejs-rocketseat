import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity("categories")

class Category {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        this.name = "";
        this.description = "";
        this.created_at = new Date();

        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Category };
