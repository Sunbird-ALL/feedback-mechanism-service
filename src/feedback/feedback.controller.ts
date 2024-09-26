import { Controller, Post, Res, Body, HttpStatus, BadRequestException, Get, Query } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { feedbackDto } from 'src/dto/feedback.dto';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {

    constructor(private readonly feedbackService: FeedbackService) { }

    @Post('/addFeedback')
    async addFeedback(@Res() reply: FastifyReply, @Body() feedbackDto: feedbackDto) {
        try {
            const { virtual_id, original_text, response_text_audio_url } = feedbackDto;
            const feedbackRecord = await this.feedbackService.addFeedback(feedbackDto);
            return reply.status(HttpStatus.OK).send(feedbackRecord);
        } catch (err) {
            return reply.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                status: "error",
                message: "Server error - " + err,
            });
        }
    }

    @Get('/getAllFeedback')
    async getAllFeedback() {
        try {
            return await this.feedbackService.getAllFeedback();
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
