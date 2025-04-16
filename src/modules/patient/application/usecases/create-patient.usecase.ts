import { Inject, Injectable } from '@nestjs/common';
import { PatientRepository } from '../ports/patient.repository.interface';
import { PATIENT_REPOSITORY } from '../ports/patient.repository.token';

@Injectable()
export class CreatePatientUseCase {
  constructor(
    @Inject(PATIENT_REPOSITORY)
    private readonly patientRepository: PatientRepository,
  ) {}


}
