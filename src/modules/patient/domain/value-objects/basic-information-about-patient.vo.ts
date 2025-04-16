export class BasicInformationAboutPatientVO{
  private _firstname: string;
  private _lastname: string;
  private _address: string;
  private _age: number;

  constructor(name: string, lastname: string, address: string, age: number) {
    this.firstname = name;
    this.lastname = lastname;
    this.address = address;
    this.age = age
  }


  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
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

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}
