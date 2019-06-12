import { Component, OnInit } from '@angular/core';

export interface Sexe {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  sexes: Sexe[] = [
    {value: '1', viewValue: 'Homme'},
    {value: '2', viewValue: 'Femme'},
    {value: '3', viewValue: 'Autres'},
    {value: '4', viewValue: 'Ne pas préciser'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
