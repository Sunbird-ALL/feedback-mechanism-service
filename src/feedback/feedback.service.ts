import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { feedback } from 'src/mongoDb/schemas/feedback.schema';

@Injectable()
export class FeedbackService {

    constructor(
        @InjectModel('Feedback') private readonly feedbackModel: Model<feedback>,
    ) { }

    async addFeedback(feedbackDto: any) {
        const createdFeedback = new this.feedbackModel(feedbackDto);
        const newFeedbackData = {
            virtual_id : createdFeedback.virtual_id,
            original_text: createdFeedback.original_text,
            response_text_audio_url: createdFeedback.response_text_audio_url,
        };
        const newFeedback = new this.feedbackModel(newFeedbackData);
        const savedFeedback = await newFeedback.save();

        return savedFeedback;
    }


    async getAllFeedback(): Promise<feedback[]> {
        return await this.feedbackModel.find().exec();
      }
}
