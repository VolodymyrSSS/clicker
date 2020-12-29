import { Component, OnInit, OnDestroy } from '@angular/core';
// import { FormControl } from '@angular/forms';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-gamefield',
  templateUrl: './gamefield.component.html',
  styleUrls: ['./gamefield.component.scss']
})
export class GamefieldComponent implements OnInit, OnDestroy {
  
  name:string = '';
  sec:number = 0;

  constructor(
    private service: UserService
  ) { }

  ngOnInit() {
    this.name = this.service.getUserName();
  }

  ngOnDestroy() {
    this.resetFields();
  }

  resetFields() {
    this.service.reset();
  }
  
}
