import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CrearTareaDTO } from './dto/create-tarea.dto';
import { EliminarTareaDTO } from './dto/delete-tarea.dto';
import { Param, Patch } from '@nestjs/common/decorators';
import { actualizarTareaDTO } from './dto/update-tarea.dto';

@Controller('tareas')
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}

  @Post()
  crearTarea(@Body() tarea: CrearTareaDTO) {
    return this.tareasService.crearTarea(tarea);
  }

  @Get()
  getTareas() {
    return this.tareasService.getTareas();
  }

  @Patch(':tareaId')
  patchTarea(
    @Param() tareaId: actualizarTareaDTO,
    @Body() params: actualizarTareaDTO,
  ) {
    return this.tareasService.actualizaTarea(tareaId, params);
  }

  @Delete()
  eliminarTarea(@Query() tareaId: EliminarTareaDTO) {
    return this.tareasService.eliminarTarea(tareaId);
  }
}
