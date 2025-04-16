import { PatientRepository } from '../../application/ports/patient.repository.interface';
import { Patient } from '../../domain/entities/patient.entity';

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
}
