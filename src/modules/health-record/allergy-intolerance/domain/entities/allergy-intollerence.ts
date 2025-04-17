
export class AllergyIntolerance {
    constructor(
      public id: string,
      public patientId: string,
      public substance: string,
      public reaction: string,
      public severity: string,
      public recordedDate: Date,
    ) {}
  }
  