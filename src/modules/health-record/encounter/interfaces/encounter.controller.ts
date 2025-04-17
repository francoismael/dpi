import { Body, Controller, Post } from '@nestjs/common';
import { CreateEncounterUseCase } from '../application/usecases/create-encounter.usecase';
import { Encounter } from '../domain/entities/encounter.entity';
import { CreateEncounterDto } from './dto/create-encounter.dto';

@Controller('encounters')
export class EncounterController {
  constructor(
    private readonly createEncounterUseCase: CreateEncounterUseCase,
  ) {}

  @Post()
  async save(@Body() createEncounterDto: CreateEncounterDto): Promise<Encounter>{
    return this.createEncounterUseCase.execute(createEncounterDto);
  }
}
