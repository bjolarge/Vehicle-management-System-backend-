import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './entities/feedback.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[ AuthModule,TypeOrmModule.forFeature([Feedback]) ],
  controllers: [FeedbackController],
  providers: [FeedbackService]
})
export class FeedbackModule {}
