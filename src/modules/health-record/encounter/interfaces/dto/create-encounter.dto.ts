import { PractitionerVO } from '../../domain/value-objects/practitioner.vo';
import { EncounterStatus } from '../../domain/constants/encounter-status.enum';

export class CreateEncounterDto {
  patient: string;
  practitioner: PractitionerVO;
  status: EncounterStatus;
  createdAt:Date;
}
