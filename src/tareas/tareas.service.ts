import { Injectable } from '@nestjs/common';
import { PgService } from 'src/services/pg.service';
import { CrearTareaDTO } from './dto/create-tarea.dto';
import { EliminarTareaDTO } from './dto/delete-tarea.dto';
import { actualizarTareaDTO } from './dto/update-tarea.dto';

@Injectable()
export class TareasService {
  constructor(private pgService: PgService) {}

  async crearTarea(tarea: CrearTareaDTO) {
    const creaTarea = await this.pgService.pgFunc('pixel.ft_agregar_tarea', [
      tarea.tarea,
    ]);

    return creaTarea;
  }

  async getTareas() {
    const getTareas = await this.pgService.pgFunc('pixel.ft_obtiene_tareas');

    return getTareas;
  }

  async actualizaTarea(tarea: actualizarTareaDTO, params: actualizarTareaDTO) {
    const finalizada = await this.pgService.pgFunc(
      'pixel.ft_actualizar_tarea',
      [tarea.tareaId, params.finalizada],
    );

    return finalizada;
  }

  async eliminarTarea(tareaId: EliminarTareaDTO) {
    const eliminarTarea = await this.pgService.pgFunc(
      'pixel.ft_elimina_tarea',
      [tareaId.tareaId],
    );

    return eliminarTarea;
  }
}
