import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import { ICard } from '../Models';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
    @Input() private battleType: string;
    @Input() private player: string;

    @Output() public clicked: EventEmitter<any> = new EventEmitter<any>();
    @Input() public cards: ICard[];

    public isClicked = false;

    constructor() { }

    ngOnInit() {
    }

    public selectCards(): void {
        this.clicked.emit({ type: this.battleType, player: this.player });
        this.isClicked = true;
    }
}
