import {v4} from 'uuid';
import { Inject, Injectable } from '@nestjs/common';
import { PatientRepository } from '../ports/patient.repository.interface';
import { PATIENT_REPOSITORY } from '../ports/patient.repository.token';
import { CreatePatientDto } from '../../interfaces/dto/create-patient.dto';
import { Patient } from '../../domain/entities/patient.entity';
import { BusinessException } from '../../../../core/exceptions/business.exception';
import { ErrorCodes } from '../../domain/constants/error-codes';

@Injectable()
export class SearchPatientUseCase {
  constructor(
    @Inject(PATIENT_REPOSITORY)
    private readonly patientRepository: PatientRepository,
  ) {}

  async execute(searchTerm: string){
    return this.patientRepository.search(searchTerm);
  }

}
