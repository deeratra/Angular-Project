import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatsmanScoreComponent } from './batsman-score.component';

describe('BatsmanScoreComponent', () => {
  let component: BatsmanScoreComponent;
  let fixture: ComponentFixture<BatsmanScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatsmanScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatsmanScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
