import { GENDER } from '../../domain/constants/gender-enums';

export class CreatePatientDto {
  firstname: string;
  lastname: string;
  birthDate: Date;
  gender: GENDER;
  address: string;
  phone: string;
  mail: string;
  profession: string;
}
