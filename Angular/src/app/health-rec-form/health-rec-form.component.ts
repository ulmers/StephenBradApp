import { Component, OnInit } from '@angular/core';

export interface Sex {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-health-rec-form',
  templateUrl: './health-rec-form.component.html',
  styleUrls: ['./health-rec-form.component.css']
})
export class HealthRecFormComponent implements OnInit {

  sexes: Sex[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

  startDate = new Date(1900, 0, 1);

  constructor() { }

  ngOnInit() {
  }

  public onCurrencyBlur(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    (target as HTMLInputElement).value = '$' + (target as HTMLInputElement).value;

  }
}
