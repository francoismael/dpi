import { Injectable, Inject } from '@nestjs/common';
import { ALLERGY_INTOLERANCE_REPOSITORY } from "../ports/allergy-intolerence.repository.token.ts";
import { AllergyIntolerance } from "../../domain/entities/allergy-intolerence";
import { AllergyIntoleranceRepository } from "../ports/allergy-intolerence.repository.interface.js";
import { BusinessException } from "../../../../../core/exceptions/business.exception";
import { AllergyIntoleranceErrorCodes } from "../../domain/constants/allergy-intolerence-error.codes";

@Injectable()
export class GetAllergyIntolerenceByPatientIdUseCase {
  constructor(
    @Inject(ALLERGY_INTOLERANCE_REPOSITORY)
    private readonly allergyIntoleranceRepository: AllergyIntoleranceRepository,
  ) {}

  async execute(patientId: string): Promise<AllergyIntolerance[]> {
    if (!patientId) {
      throw new BusinessException(
        AllergyIntoleranceErrorCodes.CREATION_ERROR,
        'Le patientId est requis',
      );
    }

    try {
      const allergies = await this.allergyIntoleranceRepository.findAllergyByPatientId(patientId);

      if (!allergies) {
        throw new BusinessException(
          AllergyIntoleranceErrorCodes.CREATION_ERROR,
          `Aucune allergie trouvée pour le patient avec l'id : ${patientId}`,
        );
      }

      return allergies;
    } catch (error) {
      throw new BusinessException(
        AllergyIntoleranceErrorCodes.CREATION_ERROR,
        error.message || 'Erreur inattendue lors de la récupération des allergies',
      );
    }
  }
}
