import { Patient } from '../../domain/entities/patient.entity';

export interface PatientRepository {
  save(patient: Patient): Promise<Patient>;
  search(searchTerm: string): Promise<Patient[]>;
}
