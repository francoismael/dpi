import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './modules/patient/patient.module';
import { EncounterModule } from './modules/health-record/encounter/encounter.module';
import { AllergyIntoleranceModule } from './modules/health-record/allergy-intolerance/allergy-intollerence.module'; // Ajoute cette ligne

@Module({
  imports: [
    PatientModule,
    EncounterModule,
    AllergyIntoleranceModule,  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
