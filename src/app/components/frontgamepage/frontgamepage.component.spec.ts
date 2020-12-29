import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontgamepageComponent } from './frontgamepage.component';

describe('FrontgamepageComponent', () => {
  let component: FrontgamepageComponent;
  let fixture: ComponentFixture<FrontgamepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontgamepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontgamepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
