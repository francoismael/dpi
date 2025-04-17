import { Inject } from "@nestjs/common"
import { AllergyIntolerance } from "../../domain/entities/allergy-intollerence"
import { AllergyIntoleranceRepository } from "../ports/allergy-intollerence.repository.interface"
import { ALLERGY_INTOLERANCE_REPOSITORY } from "../ports/allergy-intollerence.repository.token.ts"

export class GetAllergyIntolerenceByPatientIdUseCase {
    
    constructor(
        @Inject(ALLERGY_INTOLERANCE_REPOSITORY)
        private readonly allergyIntollerence: AllergyIntoleranceRepository
    ){
        
    }

    async execute(){
        
    }
}