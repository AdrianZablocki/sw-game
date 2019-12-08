import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DataService } from './services/data-service/data.service';
import { GameIntroDialogComponent } from './game-intro-dialog/game-intro-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title: string = 'Star Wars Battle';
    public isResourceChoosen: boolean = false;
    public choosenBattle: string;

    constructor(
        private dataService: DataService,
        private dialog: MatDialog
    ) { }

    private getStarships(): any {
        return this.dataService.getStarships().subscribe(data => console.log(data));
    }

    private getCharacters(): any {
        return this.dataService.getCharacters().subscribe(data => console.log(data));
    }

    private setStartGame(battleType: string): void {
        this.choosenBattle = battleType;
        this.isResourceChoosen = true;
    }

    public openDialog(): void {
        const dialogRef = this.dialog.open(GameIntroDialogComponent, {
            width: '300px',
            data: { characterResource: 'characters', starshipsResource: 'starships' }
        });

        dialogRef.afterClosed().subscribe(result => {
            const cards = {
                characters: () => {
                    this.setStartGame(result);
                    this.getCharacters();
                },
                starships: () => {
                    this.setStartGame(result);
                    this.getStarships();
                },
                undefined: () => this.isResourceChoosen = false
            }
            return cards[result]();
        });
    }
}
