import { Inject, Injectable } from '@nestjs/common';
import { PatientRepository } from '../ports/patient.repository.interface';
import { PATIENT_REPOSITORY } from '../ports/patient.repository.token';
import { BusinessException } from '../../../../core/exceptions/business.exception';
import { ErrorCodes } from '../../domain/constants/error-codes';

@Injectable()
export class GetBasicInformationAboutPatientUseCase {
  constructor(
    @Inject(PATIENT_REPOSITORY)
    private readonly patientRepository: PatientRepository,
  ) {}

  async execute(patient_id: string){
    try {
      return this.patientRepository.getBasicInformationAboutPatient(patient_id);
    }catch (error){
      throw new BusinessException(
        ErrorCodes.PATIENT_NOT_FOUND,
        `Patient doesn't exist`,
        [],
      )
    }
  }
}
