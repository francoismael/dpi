import { Patient } from '../../domain/entities/patient.entity';
import { BasicInformationAboutPatientVO } from '../../domain/value-objects/basic-information-about-patient.vo';

export interface PatientRepository {
  save(patient: Patient): Promise<Patient>;
  search(searchTerm: string): Promise<Patient[]>;
  getBasicInformationAboutPatient(patient_id: string): Promise<BasicInformationAboutPatientVO>;
}
