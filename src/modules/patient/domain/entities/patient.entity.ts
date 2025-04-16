import { GENDER } from '../enums/gender-enums';

export class Patient {
  private _id: string;
  private _name: string;
  private _lastname: string;
  private _birthDate: Date;
  private _gender: GENDER;

  constructor(id: string, name: string, lastname: string, birthDate: Date, gender: GENDER) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.birthDate = birthDate;
    this.gender = gender;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this._birthDate = value;
  }

  get gender(): GENDER {
    return this._gender;
  }

  set gender(value: GENDER) {
    this._gender = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }
}
