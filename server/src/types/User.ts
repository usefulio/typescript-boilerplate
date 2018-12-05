import { Field, Int, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

import { Organization } from "./Organization";
import { Project } from "./Project";

@ObjectType()
@Entity()
export class User {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  email: string;

  @Column()
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  address?: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  fullName(): string {
    const fullName = [];
    if (this.firstName) {
      fullName.push(this.firstName);
    }
    if (this.lastName) {
      fullName.push(this.lastName);
    }
    return fullName.join(" ");
  }

  @Field(type => [Project])
  projects: [Project];

  @Column("varchar", { array: true })
  roles: string[];

  @Field()
  @ManyToOne(type => Organization)
  organization: Organization

  @Field(type => Int)
  organizationId: number;
}
