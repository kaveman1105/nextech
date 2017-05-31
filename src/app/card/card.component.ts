import { Component, OnInit } from '@angular/core';
import { ContactCard } from '../interfaces/contact-card';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  tempPatient: ContactCard;
  private index: number;
  private Patients: ContactCard[];

  constructor(
    private cardService: CardsService
  ) { }

  ngOnInit() {
    this.Patients = this.cardService.getList();
  }

  public edit(index: number) {
    this.index = index;
    this.tempPatient = JSON.parse(JSON.stringify(this.Patients[this.index]));
    console.log(this.tempPatient);

  }

  public cancel() {
    this.tempPatient = null;
  }

  public save() {

    this.copy(this.Patients[this.index], this.tempPatient);
    this.tempPatient = null;
  }

  private copy(target: any, source: any) {
    target.FirstName = source.FirstName;
    target.LastName = source.LastName;
    target.Title = source.Title;
    target.Dob = source.Dob;
    target.Gender = source.Gender;
    target.Address = source.Address;
    target.HomePhone = source.HomePhone;
    target.CellPhone = source.CellPhone;
    target.Email = source.Email;
    target.City = source.City;
    target.State = source.State;
    target.Zip = source.Zip;
  }

}