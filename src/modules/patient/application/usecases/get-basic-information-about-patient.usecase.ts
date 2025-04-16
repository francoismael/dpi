import { Inject, Injectable } from '@nestjs/common';
import { PatientRepository } from '../ports/patient.repository.interface';
import { PATIENT_REPOSITORY } from '../ports/patient.repository.token';

@Injectable()
export class GetBasicInformationAboutPatientUseCase {
  constructor(
    @Inject(PATIENT_REPOSITORY)
    private readonly patientRepository: PatientRepository,
  ) {}

  async execute(patient_id: string){
    return this.patientRepository.getBasicInformationAboutPatient(patient_id);
  }
}
