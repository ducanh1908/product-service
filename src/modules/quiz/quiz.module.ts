import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuizController } from './quiz.controller';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';


import { ResponseController } from './response.controller';
import { ResponseService } from './response.service';

@Module({
  controllers: [
    QuizController,
   
    ResponseController,
  ],
  imports: [
    TypeOrmModule.forFeature([
      QuizRepository,
     
    ]),

  ],
  providers: [QuizService, ResponseService],
})
export class QuizModule {}
