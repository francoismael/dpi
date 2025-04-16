import { Module } from '@nestjs/common';
import { CreatePatientUseCase } from './application/usecases/create-patient.usecase';
import { InMemoryPatientRepository } from './infrastructure/repositories/in-memory-patient.repository';
import { SearchPatientUseCase } from './application/usecases/search-patient.usecase';
import { PATIENT_REPOSITORY } from './application/ports/patient.repository.token';

@Module({
  controllers: [

  ],
  providers: [
    CreatePatientUseCase,
    SearchPatientUseCase,
    {
      provide: PATIENT_REPOSITORY,
      useClass: InMemoryPatientRepository
    }
  ]
})
export class PatientModule {}
