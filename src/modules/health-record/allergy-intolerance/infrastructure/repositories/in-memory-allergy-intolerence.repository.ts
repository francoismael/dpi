import { Injectable } from '@nestjs/common';
import { AllergyIntoleranceRepository } from '../../application/ports/allergy-intolerence.repository.interface';
import { AllergyIntolerance } from '../../domain/entities/allergy-intolerence';
import { Patient } from 'src/modules/patient/domain/entities/patient.entity';

@Injectable()
export class InMemoryAllergyIntoleranceRepository implements AllergyIntoleranceRepository {
  private data: AllergyIntolerance[] = [];

  async create(allergy: AllergyIntolerance): Promise<AllergyIntolerance> {
    this.data.push(allergy);
    return allergy;
  }

  async findAllergyByPatientId(patientId: string): Promise<AllergyIntolerance[]> {
    return this.data.filter(a => a.patientId === patientId);
  }

}
