import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist is used to remove unknown properties in request's payload
      whitelist: true,
      // throw error if there're unknown props
      forbidNonWhitelisted: true,
      // transform dto object to instance of the class
      // instead of being just a shape of the class
      // also transform request parameters to the type of we defined
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
