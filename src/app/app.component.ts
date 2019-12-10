import { Component, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DataService } from './services/data-service/data.service';
import { GameIntroDialogComponent } from './UI/game-intro-dialog/game-intro-dialog.component';
import { ICard, Players } from './Models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'Star Wars Battle';
    public choosenBattle: string;
    public isLoading = false;
    public playerOneCards: ICard[];
    public playerTwoCards: ICard[];

    constructor(
        private dataService: DataService,
        private dialog: MatDialog,
        private changeDetector: ChangeDetectorRef
    ) { }

    private getStarships(player): any {
        return this.dataService.getStarships().subscribe(cards => {
            this.setPlayerCards(player, cards);
            this.markAsFetched();
        });
    }

    private getCharacters(player): any {
        return this.dataService.getCharacters().subscribe((cards: ICard[]) => {
            this.setPlayerCards(player, cards);
            this.markAsFetched();
        });
    }

    private markAsFetched(): void {
        this.isLoading = false;
        this.changeDetector.markForCheck();
    }

    private setPlayerCards(player: string, cards: ICard[]): void {
        player === Players.PLAYER_ONE ? this.playerOneCards = cards : this.playerTwoCards = cards;
    }

    public openDialog(): void {
        const dialogRef = this.dialog.open(GameIntroDialogComponent, {
            width: '300px',
            data: { charactersResources: 'characters', starshipsResources: 'starships' }
        });
        dialogRef.afterClosed().subscribe(result => this.choosenBattle = result);
    }

    public getCards(setings: { type: string, player: string }): void {
        this.isLoading = true;
        const cards = {
            characters: () => this.getCharacters(setings.player),
            starships: () => this.getStarships(setings.player),
        };
        return cards[setings.type]();
    }
}
