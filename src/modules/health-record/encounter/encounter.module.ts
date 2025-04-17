import { Module } from '@nestjs/common';
import { ENCOUNTER_REPOSITORY } from './application/ports/encounter.repository.token';
import { InMemoryEncounterRepository } from './infrastructure/repositories/in-memory-encounter.repository';
import { EncounterController } from './interfaces/encounter.controller';
import { CreateEncounterUseCase } from './application/usecases/create-encounter.usecase';

@Module({
  controllers: [EncounterController],
  providers: [
    CreateEncounterUseCase,
    {
      provide :ENCOUNTER_REPOSITORY,
      useClass: InMemoryEncounterRepository
    }
  ]
})
export class EncounterModule {}
