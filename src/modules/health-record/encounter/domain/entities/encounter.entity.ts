import { EncounterStatus } from '../constants/encounter-status.enum';
import { PractitionerVO } from '../value-objects/practitioner.vo';

export class Encounter {
  private _id: string;
  private _patient: string;
  private _practitioner: PractitionerVO;
  private _status: EncounterStatus;
  private _createdAt:Date;


  constructor(id: string, patient: string, practitioner: PractitionerVO, status: EncounterStatus, createdAt: Date) {
    this.id = id;
    this.patient = patient;
    this.practitioner = practitioner;
    this.status = status;
    this.createdAt = createdAt;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get patient(): string {
    return this._patient;
  }

  set patient(value: string) {
    this._patient = value;
  }

  get practitioner(): PractitionerVO {
    return this._practitioner;
  }

  set practitioner(value: PractitionerVO) {
    this._practitioner = value;
  }

  get status(): EncounterStatus {
    return this._status;
  }

  set status(value: EncounterStatus) {
    this._status = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = new Date(value);
  }
}
