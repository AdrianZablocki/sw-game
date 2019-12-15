import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameComponent } from './game.component';
import { LoaderComponent } from '../UI/loader/loader.component';
import { LoaderIconComponent } from '../UI/loader-icon/loader-icon.component';

describe('GameComponent', () => {
    let component: GameComponent;
    let fixture: ComponentFixture<GameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [GameComponent, LoaderComponent, LoaderIconComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should render player two scores', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.game-points__pl1')).toBeTruthy();
    });

    it('should render player two scores', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.game-points__pl2')).toBeTruthy();
    });

    it('should render game container', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.game-container')).toBeTruthy();
    });

    it(`player one scores element should have as label 'Player One:'`, () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.game-points__pl1')
            .textContent).toContain('Player One:');
    });

    it(`player two scores element should have as label 'Player Two:'`, () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.game-points__pl2')
            .textContent).toContain('Player Two:');
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});
