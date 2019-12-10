import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../Models/card.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() public card: Card;

    constructor() { }

    ngOnInit() {
        this.card = new Card(this.card);
    }


    public selectCard(card: any): void {
        console.log(card);
    }
}
