import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-frontgamepage',
  templateUrl: './frontgamepage.component.html',
  styleUrls: ['./frontgamepage.component.scss']
})
export class FrontgamepageComponent implements OnInit {

  question:string = 'What is your name?';
  name = new FormControl('');

  constructor(
    private service: UserService
  ) { }

  ngOnInit() { 
    this.name.setValue(this.service.getUserName());
  }

  onKeyUp(event) {
    this.service.setUserName(event.target.value);
  }

}
