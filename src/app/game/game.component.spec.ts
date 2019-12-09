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

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
