import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity('quizes')
export class Quiz extends BaseEntity {
  @ApiProperty({ description: 'Primary key as Quiz ID', example: 1 })
  @PrimaryGeneratedColumn({
    comment: 'The quiz unique identifier',
  })
  id: number;

  @ApiProperty({
    description: 'Title of the quiz',
    example: 'Sample Laravel quiz',
  })
  @Column({
    type: 'varchar',
  })
  title: string;

  @ApiProperty({
    description: 'Description of the quiz',
    example: 'Lorem ipsum',
  })
  @Column({
    type: 'text',
  })
  description: string;




}
