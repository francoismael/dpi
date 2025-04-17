import { EncounterStatus } from '../constants/encounter-status.enum';
import { PeriodVO } from '../value-objects/period.vo';
import { PractitionerVO } from '../value-objects/practitioner.vo';

export class Encounter {
  private _id: string;
  private _patient: string;
  private _practitioner: PractitionerVO;
  private _actualPeriod: PeriodVO;
  private _status: EncounterStatus;


  constructor(id: string, patient: string, practitioner: PractitionerVO, actualPeriod: PeriodVO, status: EncounterStatus) {
    this.id = id;
    this.patient = patient;
    this.practitioner = practitioner;
    this.actualPeriod = actualPeriod;
    this.status = status;
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

  get actualPeriod(): PeriodVO {
    return this._actualPeriod;
  }

  set actualPeriod(value: PeriodVO) {
    this._actualPeriod = new PeriodVO(
      value?.start? new Date(value.start): null,
      value?.end? new Date(value.end): null,
    );
  }

  get status(): EncounterStatus {
    return this._status;
  }

  set status(value: EncounterStatus) {
    this._status = value;
  }
}
