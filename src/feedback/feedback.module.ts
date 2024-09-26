import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { feedbackSchema } from 'src/mongoDb/schemas/feedback.schema';

@Module({
  imports: [
  MongooseModule.forFeature([
    { name: 'Feedback', schema: feedbackSchema } 
  ]),
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService]
})
export class FeedbackModule {}
