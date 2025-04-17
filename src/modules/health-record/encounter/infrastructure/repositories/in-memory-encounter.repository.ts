import { EncounterRepository } from '../../application/ports/encounter.repository.interface';
import { Encounter } from '../../domain/entities/encounter.entity';
import { BusinessException } from '../../../../../core/exceptions/business.exception';
import { EncounterErrorCodes } from '../../domain/constants/encounter-error.codes';

export class InMemoryEncounterRepository implements EncounterRepository {
  private encounters: Encounter[] = [];

  async save(encounter: Encounter): Promise<Encounter> {
    this.encounters.push(encounter);
    return encounter;
  }
}
