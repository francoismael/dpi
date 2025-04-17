import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './modules/patient/patient.module';
import { EncounterModule } from './modules/health-record/encounter/encounter.module';

@Module({
  imports: [
    PatientModule,
    EncounterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
