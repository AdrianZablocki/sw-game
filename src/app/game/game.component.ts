import { Component, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
    @Input() private battleType: string;

    @Output() public clicked: EventEmitter<any> = new EventEmitter<any>();
    @Input() public isLoading = false;

    public isClicked = false;

    constructor() { }

    public onClick(): void {
        this.clicked.emit(this.battleType);
        this.isClicked = true;
    }
}
