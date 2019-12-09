import { Component, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DataService } from './services/data-service/data.service';
import { GameIntroDialogComponent } from './UI/game-intro-dialog/game-intro-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'Star Wars Battle';
    public choosenBattle: string;
    public isLoading = false;

    constructor(
        private dataService: DataService,
        private dialog: MatDialog,
        private changeDetector: ChangeDetectorRef
    ) { }

    private getStarships(): any {
        return this.dataService.getStarships().subscribe(data => {
            console.log('result', data);
            this.markAsFetched();
        });
    }

    private getCharacters(): any {
        return this.dataService.getCharacters().subscribe(data => {
            console.log(data);
            this.markAsFetched();
        });
    }

    private markAsFetched(): void {
        this.isLoading = false;
        this.changeDetector.markForCheck();
    }

    public openDialog(): void {
        const dialogRef = this.dialog.open(GameIntroDialogComponent, {
            width: '300px',
            data: { characterResource: 'characters', starshipsResource: 'starships' }
        });
        dialogRef.afterClosed().subscribe(result => this.choosenBattle = result);
    }

    public getCards(battleType: string): void {
        this.isLoading = true;
        const cards = {
            characters: () => this.getCharacters(),
            starships: () => this.getStarships(),
        };
        return cards[battleType]();
    }
}
