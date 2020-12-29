import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-clicks',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.scss']
})
export class ClicksComponent implements OnInit {

  startWord: string = 'start';

  isPlaying: boolean = false;

  clicks: number = 0;

  sec: number;

  noClicks: boolean = false;

  gameClicks = () => {
    this.isPlaying = false;
    this.service.setCountClicks(this.clicks);
    this.service.setRecordClicks(this.clicks);
  }
  
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.timePeriod.subscribe((sec) => {
      this.sec = sec;
    });
    this.service.clicks.subscribe((clicks) => {
      this.clicks = clicks;
    });
    this.service.noClicks.subscribe((noClicks) => {
      this.noClicks = noClicks;
    })
  }

  isClicking() {
    if(!this.isPlaying) {
      this.isPlaying = true;
      this.startWord = 'count';
      let countDown = setInterval(() => {
        if(this.sec <= 0) {
          clearInterval(countDown);
          this.service.setNoClicks(true); // 
          this.startWord = 'start';
        } else {
          this.sec--;
        }
      }, 1000);
      setTimeout(this.gameClicks, this.sec * 1000);
    } else {
      this.clicks++;
    } 
  }
}
