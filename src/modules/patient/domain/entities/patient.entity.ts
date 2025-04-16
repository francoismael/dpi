import { GENDER } from '../constants/gender-enums';

export class Patient {
  private _id: string;
  private _name: string;
  private _lastname: string;
  private _birthDate: Date;
  private _gender: GENDER;
  private _address: string;


  constructor(id: string, name: string, lastname: string, birthDate: Date, gender: GENDER, address: string) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.birthDate = birthDate;
    this.gender = gender;
    this.address = address;
  }


  get age(): number {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const monthDifference = today.getMonth() - this.birthDate.getMonth();
    if (
      monthDifference < 0 || (monthDifference === 0 && today.getDate() < this.birthDate.getDate())
    ) {
      age--;
    }
    return age;
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
    this._birthDate = new Date(value);
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

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }
}
