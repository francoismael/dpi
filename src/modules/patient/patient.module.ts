import { Module } from '@nestjs/common';
import { CreatePatientUseCase } from './application/usecases/create-patient.usecase';
import { InMemoryPatientRepository } from './infrastructure/repositories/in-memory-patient.repository';
import { SearchPatientUseCase } from './application/usecases/search-patient.usecase';
import { PATIENT_REPOSITORY } from './application/ports/patient.repository.token';
import {
  GetBasicInformationAboutPatientUseCase
} from './application/usecases/get-basic-information-about-patient.usecase';
import { PatientController } from './interfaces/patient.controller';

@Module({
  controllers: [
    PatientController
  ],
  providers: [
    CreatePatientUseCase,
    SearchPatientUseCase,
    GetBasicInformationAboutPatientUseCase,
    {
      provide: PATIENT_REPOSITORY,
      useClass: InMemoryPatientRepository
    }
  ]
})
export class PatientModule {}
