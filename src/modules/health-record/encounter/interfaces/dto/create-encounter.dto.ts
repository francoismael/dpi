import { PractitionerVO } from '../../domain/value-objects/practitioner.vo';
import { PeriodVO } from '../../domain/value-objects/period.vo';
import { EncounterStatus } from '../../domain/constants/encounter-status.enum';

export class CreateEncounterDto {
  patient: string;
  practitioner: PractitionerVO;
  actualPeriod: PeriodVO;
  status: EncounterStatus;
}
