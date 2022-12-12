import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class CrearTareaDTO {
  @ApiProperty({
    description: 'Tituto o Descripcion de la tarea',
    required: true,
  })
  @IsOptional()
  @Type(() => String)
  @IsString()
  public tarea: string;
}
