import { PatientRepository } from '../../application/ports/patient.repository.interface';
import { Patient } from '../../domain/entities/patient.entity';
import { BasicInformationAboutPatientVO } from '../../domain/value-objects/basic-information-about-patient.vo';

export class InMemoryPatientRepository implements PatientRepository {
  private patients: Patient[] = [];

  async save(patient: Patient): Promise<Patient> {
    this.patients.push(patient);
    return patient;
  }

  async search(searchTerm: string): Promise<Patient[]> {
    const lowerTerm = searchTerm.toLowerCase();
    return this.patients.filter(patient =>
      (patient && patient.name.toLowerCase().includes(lowerTerm)) ||
      (patient && patient.lastname.toLowerCase().includes(lowerTerm))
    );
  }

  async getBasicInformationAboutPatient(patient_id: string){
    const patient = this.patients.filter(patient =>
      patient && patient.id.includes(patient_id)
    )[0];

    return new BasicInformationAboutPatientVO(patient.name, patient.lastname, patient.address,patient.age)
  }
}
