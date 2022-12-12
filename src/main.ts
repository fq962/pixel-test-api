import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });

  // Condifuracion de Pipe de validacion de datos
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
