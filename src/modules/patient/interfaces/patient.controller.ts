import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreatePatientUseCase } from '../application/usecases/create-patient.usecase';
import { SearchPatientUseCase } from '../application/usecases/search-patient.usecase';
import {
  GetBasicInformationAboutPatientUseCase
} from '../application/usecases/get-basic-information-about-patient.usecase';
import { BasicInformationAboutPatientVO } from '../domain/value-objects/basic-information-about-patient.vo';
import { Patient } from '../domain/entities/patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';

@Controller('patients')
export class PatientController {
  constructor(
    private readonly createPatientUseCase: CreatePatientUseCase,
    private readonly searchPatientUseCase: SearchPatientUseCase,
    private readonly getBasicInformationAboutPatientUseCase: GetBasicInformationAboutPatientUseCase,
  ) {}

  @Post()
  async create(@Body() createPatientDto: CreatePatientDto): Promise<Patient>{
    return await this.createPatientUseCase.execute(createPatientDto);
  }

  @Get('search')
  async searchPatientByNameOrLastname(@Query('search-term') searchTerm: string): Promise<Patient[]>{
    return await this.searchPatientUseCase.execute(searchTerm);
  }

  @Get('basic-information')
  async getBasicInformationAboutPatient(@Query('patient-id') patientId: string): Promise<BasicInformationAboutPatientVO>{
    return await this.getBasicInformationAboutPatientUseCase.execute(patientId);
  }

}
