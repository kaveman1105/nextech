import { Injectable } from '@angular/core';
import { ContactCard } from '../interfaces/contact-card';
import { list } from '../assets/patientList';

@Injectable()
export class CardsService {

  private Patients: ContactCard[];

  constructor() {
    this.Patients = JSON.parse(list);
  }

  public getList() {
    return this.Patients;
  }

}
