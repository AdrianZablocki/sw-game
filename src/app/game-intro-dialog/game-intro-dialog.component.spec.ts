import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GameIntroDialogComponent } from './game-intro-dialog.component';

describe('GameIntroDialogComponent', () => {
    let component: GameIntroDialogComponent;
    let fixture: ComponentFixture<GameIntroDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatDialogModule],
            declarations: [GameIntroDialogComponent],
            providers: [
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: [] }
            ]
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
