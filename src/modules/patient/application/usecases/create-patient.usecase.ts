import { Inject, Injectable } from '@nestjs/common';
import { PatientRepository } from '../ports/patient.repository.interface';
import { PATIENT_REPOSITORY } from '../ports/patient.repository.token';
import { CreatePatientDto } from '../../interfaces/dto/create-patient.dto';
import { Patient } from '../../domain/entities/patient.entity';
import { v4 } from 'uuid';
import { BusinessException } from '../../../../core/exceptions/business.exception';
import { ErrorCodes } from '../../domain/constants/error-codes';

@Injectable()
export class CreatePatientUseCase {
  constructor(
    @Inject(PATIENT_REPOSITORY)
    private readonly patientRepository: PatientRepository,
  ) {}

  async execute(createPatientDto: CreatePatientDto){
    try {
      const newPatient = new Patient(
        v4(),
        createPatientDto.name,
        createPatientDto.lastname,
        createPatientDto.birthDate,
        createPatientDto.gender,
        createPatientDto.address
      );
      return this.patientRepository.save(newPatient);
    }catch (error){
      throw new BusinessException(
        ErrorCodes.PATIENT_ALREADY_EXISTS,
        `Patient with this ID already exists`,
        [],
      )
    }
  }
}
