import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { DataService } from './services/data-service/data.service';
import { GameIntroComponent } from './game-intro/game-intro.component';
import { GameIntroDialogComponent } from './game-intro/game-intro-dialog/game-intro-dialog.component';


@NgModule({
    entryComponents: [
        GameIntroComponent,
        GameIntroDialogComponent
    ],
    declarations: [
        AppComponent,
        GameComponent,
        GameIntroComponent,
        GameIntroDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatCardModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
