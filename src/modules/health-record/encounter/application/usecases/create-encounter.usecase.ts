import { Inject, Injectable } from '@nestjs/common';
import { EncounterRepository } from '../ports/encounter.repository.interface';
import { ENCOUNTER_REPOSITORY } from '../ports/encounter.repository.token';
import { CreateEncounterDto } from '../../interfaces/dto/create-encounter.dto';
import { Encounter } from '../../domain/entities/encounter.entity';
import { v4 } from 'uuid';
import { BusinessException } from '../../../../../core/exceptions/business.exception';
import { EncounterErrorCodes } from '../../domain/constants/encounter-error.codes';

@Injectable()
export class CreateEncounterUseCase {
  constructor(
    @Inject(ENCOUNTER_REPOSITORY)
    private readonly encounterRepository: EncounterRepository,
  ) {}

  async execute(createEncounterDto: CreateEncounterDto){
    try {
      const encounter = new Encounter(
        v4(),
        createEncounterDto.patient,
        createEncounterDto.practitioner,
        createEncounterDto.status,
        createEncounterDto.createdAt
      );
      return this.encounterRepository.save(encounter);
    }catch (error){
      throw new BusinessException(
        EncounterErrorCodes.ENCOUNTER_CREATION_ERROR,
        `An error occurred while creating the consultation.`,
        [],
      )
    }
  }
}
