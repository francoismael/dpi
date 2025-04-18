// allergy-intolerance.module.ts
import { Module } from '@nestjs/common';
import { AllergyIntoleranceController } from './interfaces/allergy-intolerence.controller';
import { CreateAllergyIntoleranceUseCase } from './application/usecases/create-allergy-intolerance.usecase';
import { InMemoryAllergyIntoleranceRepository } from './infrastructure/repositories/in-memory-allergy-intolerence.repository';
import { ALLERGY_INTOLERANCE_REPOSITORY } from './application/ports/allergy-intolerence.repository.token.ts';
import { GetAllergyIntolerenceByPatientIdUseCase } from './application/usecases/get-allergy-intolerence-by-patient-id.usecase';

@Module({
  controllers: [AllergyIntoleranceController],
  providers: [
    CreateAllergyIntoleranceUseCase,
    GetAllergyIntolerenceByPatientIdUseCase,
    {
      provide: ALLERGY_INTOLERANCE_REPOSITORY,
      useClass: InMemoryAllergyIntoleranceRepository,
    },
  ],
})
export class AllergyIntoleranceModule {}
