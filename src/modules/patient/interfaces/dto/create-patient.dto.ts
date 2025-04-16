import { GENDER } from '../../domain/enums/gender-enums';

export class CreatePatientDto {
  id: string;
  name: string;
  lastname: string;
  birthDate: Date;
  gender: GENDER;
}
