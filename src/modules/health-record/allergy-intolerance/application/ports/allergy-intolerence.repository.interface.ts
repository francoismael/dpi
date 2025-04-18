import { AllergyIntolerance } from '../../domain/entities/allergy-intolerence';

export interface AllergyIntoleranceRepository {
    create(data: AllergyIntolerance): Promise<AllergyIntolerance>;
    findAllergyByPatientId(patientId: string): Promise<AllergyIntolerance[]>;
}
