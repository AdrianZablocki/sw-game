import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { DataService } from './services/data-service/data.service';
import { GameIntroDialogComponent } from './UI/game-intro-dialog/game-intro-dialog.component';
import { LoaderComponent } from './UI/loader/loader.component';
import { LoaderIconComponent } from './UI/loader-icon/loader-icon.component';
import { PlayerComponent } from './player/player.component';
import { CardComponent } from './card/card.component';


@NgModule({
    entryComponents: [
        GameIntroDialogComponent
    ],
    declarations: [
        AppComponent,
        GameComponent,
        GameIntroDialogComponent,
        LoaderComponent,
        LoaderIconComponent,
        PlayerComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule
    ],
    providers: [
        DataService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
