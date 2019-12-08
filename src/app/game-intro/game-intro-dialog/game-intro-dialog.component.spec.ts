import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameIntroDialogComponent } from './game-intro-dialog.component';

describe('GameIntroDialogComponent', () => {
  let component: GameIntroDialogComponent;
  let fixture: ComponentFixture<GameIntroDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameIntroDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameIntroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
