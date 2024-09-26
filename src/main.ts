import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  // Create a Fastify application
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Listen on the port defined in environment variables
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0'); 
  console.log(`Server is running on port ${port}`);
}

bootstrap();
