import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
    @Input() public isLoading = false;

    constructor() { }
}
