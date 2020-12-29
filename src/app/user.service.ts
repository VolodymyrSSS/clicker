import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private name: string = 'Player';
  timePeriod: BehaviorSubject<number> = new BehaviorSubject(10);
  clicks: BehaviorSubject<number> = new BehaviorSubject(0);
  map = new Map();
  recordClicks: BehaviorSubject<number> = new BehaviorSubject(0);
  noClicks: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isFinished: BehaviorSubject<boolean> = new BehaviorSubject(false);

  // constructor() {
  //   this.timePeriod.subscribe(() => {
  //     this.reset();
  //   });
  // }

  getUserName() {
    return this.name;
  }

  setUserName(name) {
    this.name = name;   
  }

  setTimePeriod(seconds) {
    this.timePeriod.next(seconds);
  }

  getTimePeriod() {
    return this.timePeriod.getValue();
  }

  setCountClicks(clicks) {
    this.clicks.next(clicks);
  }

  setRecordClicks(recordClicks) {
    if(recordClicks > this.getCurrentClicks()) {
      this.map.set(this.timePeriod.getValue(), recordClicks);
    }
  }

  getCurrentClicks() {
    const currentClicks = this.map.get(this.timePeriod.getValue()) || 0;
    return currentClicks;
  }
  
  setNoClicks(noClicks) {
    this.noClicks.next(noClicks);
  }
  
  setIsFinished(value) {
    this.isFinished.next(value);
  }

  reset() {
    this.setCountClicks(0);
    this.setNoClicks(false);
    this.setTimePeriod(this.getTimePeriod());
    this.setIsFinished(false);
  }

}
