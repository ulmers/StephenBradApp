import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-rec-form',
  templateUrl: './health-rec-form.component.html',
  styleUrls: ['./health-rec-form.component.css']
})
export class HealthRecFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('health recommendation loaded');
  }

}
