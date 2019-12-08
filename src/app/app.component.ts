import { Component } from '@angular/core';
// import { map } from 'rxjs/operators';


import { DataService } from './services/data-service/data.service';
import { MatDialog } from '@angular/material/dialog';

import { GameIntroDialogComponent } from './game-intro/game-intro-dialog/game-intro-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title: string = 'Star Wars Battle';

    constructor(
        private dataService: DataService,
        private dialog: MatDialog
    ) { }

    private getStarships() {
        return this.dataService.getStarships().subscribe(data => console.log(data));
    }

    private getCharacters() {
        return this.dataService.getCharacters().subscribe(data => console.log(data));
    }

    public openDialog(): void {
        const dialogRef = this.dialog.open(GameIntroDialogComponent, {
            width: '250px',
            data: { characterResource: 'characters', starshipsResource: 'starships' }
        });

        dialogRef.afterClosed().subscribe(result => {

            const cards = {
                characters: () => this.getCharacters(),
                starships: () => this.getStarships(),
                undefined: () => console.log('nothing choosen')
            }
            return cards[result]();
        });
    }
}
