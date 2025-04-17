// allergy-intolerance.module.ts
import { Module } from '@nestjs/common';
import { AllergyIntoleranceController } from './interfaces/allergy-intollerence.controller';
import { CreateAllergyIntoleranceUseCase } from './application/usecases/create-allergy-intolerance.usecase';
import { InMemoryAllergyIntoleranceRepository } from './infrastructure/repositories/in-memory-allergy-intollerence.repository';
import { ALLERGY_INTOLERANCE_REPOSITORY } from './application/ports/allergy-intollerence.repository.token.ts';

@Module({
  controllers: [AllergyIntoleranceController],
  providers: [
    CreateAllergyIntoleranceUseCase,
    {
      provide: ALLERGY_INTOLERANCE_REPOSITORY,
      useClass: InMemoryAllergyIntoleranceRepository,
    },
  ],
})
export class AllergyIntoleranceModule {}
