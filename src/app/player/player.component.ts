import { Component, EventEmitter, Output, Input } from '@angular/core';

import { ICard, Card, IPlayerResult, IGameType, Players } from '../Models';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
    @Input() private battleType: string;
    @Input() private player: string;

    @Output() public score: EventEmitter<IPlayerResult> = new EventEmitter<IPlayerResult>();
    @Output() public clicked: EventEmitter<IGameType> = new EventEmitter<IGameType>();
    @Input() public cards: ICard[];
    @Input() public isEndGame: boolean;
    @Input() public isError = false;

    public isClicked = false;
    public isSelected = false;
    public playerOne: Players = Players.PLAYER_ONE;

    constructor() { }

    private countScore(card: Card): number {
        const score = {
            characters: () => parseInt(card.mass, 10) + parseInt(card.height, 10),
            starships: () => parseInt(card.crew, 10) + parseInt(card.maxAtmospheringSpeed, 10),
        };
        return score[this.battleType]();
    }

    public selectCards(): void {
        this.clicked.emit({ type: this.battleType, player: this.player });
        this.isClicked = true;
    }

    public selectCard(card: Card): void {
        this.isSelected = true;
        this.score.emit({ player: this.player, score: this.countScore(card) });
    }
}
