import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // prevent malicious data from being sent into our Requests
      whitelist: true,
      // same as whitelist, but throw an error
      forbidNonWhitelisted: true,
      // transform dto object to instance of the class
      // instead of being just a shape of the class
      // also transform request parameters to the type of we defined
      transform: true,
      // transform type on dto fields instead of
      // explicitly using decorator like @Type(() => Number)
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
