import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  name: string = '';

  sec: number;

  clicks:number = 0;

  recordClicks: number = this.service.getRecordClicks();

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.name = this.service.getUserName();

    this.service.timePeriod.subscribe((sec) => {
      this.sec = sec;
      this.recordClicks = this.service.getRecordClicks();
    });

    this.service.clicks.subscribe((clicks) => {
      this.clicks = clicks;
      this.recordClicks = this.service.getRecordClicks();      
    });

  }

  
}
