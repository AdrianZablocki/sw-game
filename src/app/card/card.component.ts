import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card, Players } from '../Models';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Output() public selected: EventEmitter<Card> = new EventEmitter<Card>();
    @Input() public card: Card;
    @Input() public player: string;

    public playerOne: Players = Players.PLAYER_ONE;

    public isSelected = false;

    constructor() { }

    ngOnInit() {
        this.card = new Card(this.card);
    }


    public selectCard(card: Card): void {
        this.isSelected = true;
        this.selected.emit(card);
    }
}
