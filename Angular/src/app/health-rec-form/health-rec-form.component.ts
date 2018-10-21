import { Component, OnInit } from '@angular/core';
import { FormEntryService } from '../form-entry.service';
import {FormEntry} from '../form-entry';
import {HttpErrorResponse} from '@angular/common/http';
import {HealthPlan} from '../health-plan';
import {GoogleSignInService} from '../google-sign-in.service';

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

  formEntry: FormEntry = new FormEntry();

  error: HttpErrorResponse;

  sexes: Sex[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];
  startDate = new Date(1900, 0, 1);

  constructor(private formEntryService: FormEntryService, private googleSignInService: GoogleSignInService) { }

  ngOnInit() {
    // @ts-ignore
    this.formEntry.healthPlans = new Array<HealthPlan>();
      this.formEntry.healthPlans.push(new HealthPlan());
  }

  public onClickAddHealthPlan() {
    this.formEntry.healthPlans.push(new HealthPlan());
  }

  public onClickRemoveHealthPlan(healthPlan) {
    const index = this.formEntry.healthPlans.indexOf(healthPlan, 0);
    if (index > -1) {
      this.formEntry.healthPlans.splice(index, 1);
    }
  }

  public onClickSubmitButton() {
    this.postFormEntry();
  }

  public postFormEntry(): void {

    // TODO gapi userId
    this.formEntry.userId = this.googleSignInService.getUserId();

    this.formEntryService.postFormEntry(this.formEntry).subscribe(resp => {
      const keys = resp.headers.keys();

      console.log('response received');

      console.log(resp.body);

    }, error => this.error = error);
  }

  public onCurrencyBlur(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    (target as HTMLInputElement).value = '$' + (target as HTMLInputElement).value;

  }
}
