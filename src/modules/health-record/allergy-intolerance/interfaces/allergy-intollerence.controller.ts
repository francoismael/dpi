// interfaces/allergy-intolerance.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CreateAllergyIntoleranceUseCase } from '../application/usecases/create-allergy-intolerance.usecase';
import { CreateAllergyIntoleranceDto } from './dto/create-allergy-intolerance.dto';
import { AllergyIntolerance } from '../domain/entities/allergy-intollerence';
import { v4 as uuidv4 } from 'uuid';

@Controller('allergy-intolerance')
export class AllergyIntoleranceController {
  constructor(private readonly createUseCase: CreateAllergyIntoleranceUseCase) {}

  @Post()
  async create(@Body() dto: CreateAllergyIntoleranceDto): Promise<AllergyIntolerance> {
    const newEntry = new AllergyIntolerance(
      uuidv4(),
      dto.patientId,
      dto.substance,
      dto.reaction,
      dto.severity,
      dto.recordedDate,
    );
    return await this.createUseCase.execute(newEntry);
    
  }
}
