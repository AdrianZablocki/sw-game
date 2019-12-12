import { Component, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DataService } from './services/data-service/data.service';
import { GameIntroDialogComponent } from './UI/game-intro-dialog/game-intro-dialog.component';
import { ICard, Players, BattleType, IPlayerResult } from './Models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private charactersBattle: BattleType = BattleType.CHARACTERS;
    private starshipsBattle: BattleType = BattleType.STARSHIPS;
    private winner: string;

    public title = 'Star Wars';
    public choosenBattle: string;
    public isLoading = false;
    public playerOneCards: ICard[];
    public playerTwoCards: ICard[];
    public playerOneTotalScore: number;
    public playerTwoTotalScore: number;
    public roundEnd: boolean;

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
        if (this.playerOneTotalScore && this.playerTwoTotalScore) {
            this.roundEnd = true;
        }
        const dialogRef = this.dialog.open(GameIntroDialogComponent, {
            disableClose: true,
            width: '300px',
            data: {
                charactersResources: this.charactersBattle,
                starshipsResources: this.starshipsBattle,
                isEndGame: this.roundEnd,
                winner: this.winner
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.choosenBattle = result;
        });
    }

    public getCards(setings: { type: string, player: string }): void {
        this.isLoading = true;
        const cards = {
            characters: () => this.getCharacters(setings.player),
            starships: () => this.getStarships(setings.player),
        };
        return cards[setings.type]();
    }

    public setScore(result: IPlayerResult): void {
        const playerScores = {
            'Player One': () => this.playerOneTotalScore = result.score,
            'Player Two': () => this.playerTwoTotalScore = result.score
        };
        return playerScores[result.player]();
    }

    public checkWinner(): void {
        if (this.playerOneTotalScore === this.playerTwoTotalScore) {
            this.winner = 'No one';
        } else if (this.playerOneTotalScore > this.playerTwoTotalScore) {
            this.winner = 'Player One';
        } else {
            this.winner = 'Player Two';
        }
        setTimeout(() => this.openDialog(), 1000);
    }
}
