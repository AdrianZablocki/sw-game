import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent {
    @Output() public clicked: EventEmitter<any> = new EventEmitter<any>();
    @Input() private battleType: string;

    public isClicked = false;

    constructor() { }

    public onClick(): void {
        this.clicked.emit(this.battleType);
        this.isClicked = true;
    }
}
