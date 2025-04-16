import { Controller } from '@nestjs/common';
import { CreatePatientUseCase } from '../application/usecases/create-patient.usecase';
import { SearchPatientUseCase } from '../application/usecases/search-patient.usecase';

@Controller('patients')
export class PatientController {
  constructor(
    private readonly createPatientUseCase: CreatePatientUseCase,
    private readonly searchPatientUseCase: SearchPatientUseCase
  ) {
  }
}
