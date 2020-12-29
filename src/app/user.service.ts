import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private name: string = 'Player';

  timePeriod: BehaviorSubject<number> = new BehaviorSubject(10);

  clicks: BehaviorSubject<number> = new BehaviorSubject(0);

  recordClicks: BehaviorSubject<number> = new BehaviorSubject(0);

  map = new Map();

  noClicks: BehaviorSubject<boolean> = new BehaviorSubject(false);


  getUserName() {
    return this.name;
  }

  setUserName(name) {
    this.name = name;   
  }

  setTimePeriod(seconds) {
    this.timePeriod.next(seconds);
  }

  setCountClicks(clicks) {
    this.clicks.next(clicks);
  }

  setRecordClicks(recordClicks) {
    const currentClicks = this.map.get(this.timePeriod.getValue()) || 0;
    if(recordClicks > currentClicks) {
    // if(recordClicks > this.getRecordClicks()) {
      this.map.set(this.timePeriod.getValue(), recordClicks);
    }
  }

  getRecordClicks() {
    const currentClicks = this.map.get(this.timePeriod.getValue()) || 0;
    return currentClicks;
  }

  reset() {
    this.setCountClicks(0);
    this.setNoClicks(false);
  }

  setNoClicks(noClicks) {
    this.noClicks.next(noClicks);
  }

}
