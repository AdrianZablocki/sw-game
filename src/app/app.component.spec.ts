import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { GameIntroDialogComponent } from './UI/game-intro-dialog/game-intro-dialog.component';
import { GameComponent } from './game/game.component';
import { LoaderComponent } from './UI/loader/loader.component';
import { LoaderIconComponent } from './UI/loader-icon/loader-icon.component';
import { PlayerComponent } from './player/player.component';
import { CardComponent } from './card/card.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                MatDialogModule,
                MatCardModule,
                MatButtonModule
            ],
            declarations: [
                AppComponent,
                GameIntroDialogComponent,
                GameComponent,
                LoaderComponent,
                LoaderIconComponent,
                PlayerComponent,
                CardComponent
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Star Wars Battle'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Star Wars Battle');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.select-battle')
            .textContent).toContain('Choose sources');
    });
});
