import { Field, Int, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Organization {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  name: string;
}
