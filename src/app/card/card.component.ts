import { Component, OnInit, Input } from '@angular/core';
import { Card, Players } from '../Models';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() public card: Card;
    @Input() public player: string;

    public playerOne: Players = Players.PLAYER_ONE;
    // public isDisabled: boolean = false;

    public isSelected = false;

    constructor() { }

    ngOnInit() {
        console.log(this.player);
        this.card = new Card(this.card);
    }


    public selectCard(card: any): void {
        // this.isDisabled = true;
        this.isSelected = true;
        console.log(card);
    }
}
