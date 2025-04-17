// application/ports/allergy-intolerance.repository.interface.ts
import { AllergyIntolerance } from '../../domain/entities/allergy-intollerence';

export interface AllergyIntoleranceRepository {
    create(data: AllergyIntolerance): Promise<AllergyIntolerance>;
}
