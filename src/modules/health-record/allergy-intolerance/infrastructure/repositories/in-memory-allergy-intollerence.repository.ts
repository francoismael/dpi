import { Injectable } from '@nestjs/common';
import { AllergyIntoleranceRepository } from '../../application/ports/allergy-intollerence.repository.interface';
import { AllergyIntolerance } from '../../domain/entities/allergy-intollerence';

@Injectable()
export class InMemoryAllergyIntoleranceRepository implements AllergyIntoleranceRepository {
  private data: AllergyIntolerance[] = [];

  async create(allergy: AllergyIntolerance): Promise<AllergyIntolerance> {
    this.data.push(allergy);
    return allergy;
  }

}
