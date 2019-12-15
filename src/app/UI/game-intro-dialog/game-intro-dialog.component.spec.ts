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


    it(`should have choose characters button`, () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.dialog__button--characters')
            .textContent).toContain('characters battle');
    });

    it(`should have choose starships button`, () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.dialog__button--starships')
            .textContent).toContain('starships battle');
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});
