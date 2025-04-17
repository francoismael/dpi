import { Encounter } from '../../domain/entities/encounter.entity';

export interface EncounterRepository {
  save(encounter: Encounter): Promise<Encounter>;
}
