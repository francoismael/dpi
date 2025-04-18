
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateAllergyIntoleranceUseCase } from '../application/usecases/create-allergy-intolerance.usecase';
import { CreateAllergyIntoleranceDto } from './dto/create-allergy-intolerance.dto';
import { GetAllergyIntolerenceByPatientIdUseCase } from '../application/usecases/get-allergy-intolerence-by-patient-id.usecase';
import { AllergyIntolerance } from '../domain/entities/allergy-intolerence';
import { v4 as uuidv4 } from 'uuid';

@Controller('allergy-intolerance')
export class AllergyIntoleranceController {
  constructor(private readonly createUseCase: CreateAllergyIntoleranceUseCase,
              private readonly getAllergyByPatientIdUsecase: GetAllergyIntolerenceByPatientIdUseCase
  ) {}

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

  @Get('patient/:patientId')
  async getAllergieByPatientId(@Param('patientId') patientId: string): Promise<AllergyIntolerance[]> {
    return await this.getAllergyByPatientIdUsecase.execute(patientId);
  }
}
