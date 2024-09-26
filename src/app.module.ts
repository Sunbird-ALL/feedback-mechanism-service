import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    // For access .env file
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // For access the mongoUrl
    MongooseModule.forRoot(process.env.Mongo_Url),
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
