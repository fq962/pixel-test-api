import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasModule } from './tareas/tareas.module';
import { PgService } from './services/pg.service';

@Module({
  imports: [TareasModule],
  controllers: [AppController],
  providers: [AppService, PgService],
})
export class AppModule {}
