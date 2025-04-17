import { GENDER } from '../constants/gender-enums';

export class Patient {
  private _id: string;
  private _firstname: string;
  private _lastname: string;
  private _birthDate: Date;
  private _gender: GENDER;
  private _address: string;
  private _phone: string;
  private _email: string;
  private _profession: string;


  constructor(
    id: string,
    firstname: string,
    lastname: string,
    birthDate: Date,
    gender: GENDER,
    address: string,
    phone: string,
    email: string,
    profession: string
  ) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.birthDate = birthDate;
      this.gender = gender;
      this.address = address;
      this.phone = phone;
      this.email = email;
      this.profession = profession;
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

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
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

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get profession(): string {
    return this._profession;
  }

  set profession(value: string) {
    this._profession = value;
  }
}
