import { Injectable, Inject } from '@nestjs/common';
import { v4 } from 'uuid';
import { AllergyIntolerance } from '../../domain/entities/allergy-intollerence';
import { AllergyIntoleranceRepository } from '../ports/allergy-intollerence.repository.interface';
import { ALLERGY_INTOLERANCE_REPOSITORY } from '../ports/allergy-intollerence.repository.token.ts';
import { BusinessException } from '../../../../../core/exceptions/business.exception';
import { AllergyIntoleranceErrorCodes } from '../../domain/constants/allergy-intolerence-error.codes';
import { CreateAllergyIntoleranceDto } from '../../interfaces/dto/create-allergy-intolerance.dto';

@Injectable()
export class CreateAllergyIntoleranceUseCase {
  constructor(
    @Inject(ALLERGY_INTOLERANCE_REPOSITORY)
    private readonly repository: AllergyIntoleranceRepository,
  ) {}

  async execute(dto: CreateAllergyIntoleranceDto): Promise<AllergyIntolerance> {
    if (!dto.patientId) {
      throw new BusinessException(
        AllergyIntoleranceErrorCodes.CREATION_ERROR,
        'Le patientId est requis',
      );
    }

    try {
      const newAllergy = new AllergyIntolerance(
        v4(), 
        dto.patientId,
        dto.substance,
        dto.reaction,
        dto.severity,
        dto.recordedDate
      );

     return await this.repository.create(newAllergy);
    } catch (error) {
      throw new BusinessException(
        AllergyIntoleranceErrorCodes.CREATION_ERROR,
        error.message,
      );
    }
  }
}
