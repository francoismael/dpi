import { GENDER } from '../../domain/constants/gender-enums';

export class CreatePatientDto {
  id: string;
  name: string;
  lastname: string;
  birthDate: Date;
  gender: GENDER;
  address: string;
}
