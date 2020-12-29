import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-seconds',
  templateUrl: './seconds.component.html',
  styleUrls: ['./seconds.component.scss']
})
export class SecondsComponent implements OnInit {
  seconds = [5, 10, 15];

  period = 0;

  constructor(
    private service: UserService
  ) { }

  ngOnInit():void {
    this.service.timePeriod.subscribe((sec) => {
      this.period = sec;
    })
  }

  getSeconds(seconds) {
    this.service.setTimePeriod(seconds);
    // this.service.recordClicks.subscribe((sec) => {
    //   sec = seconds;
    //   this.service.recordClicks.next(seconds);
    //   console.log('recordCl', sec);
    // });
  }

}
