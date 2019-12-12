import {
    Component,
    Input,
    ChangeDetectionStrategy,
    OnChanges,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnChanges {
    @Output() private roundEnd: EventEmitter<boolean> = new EventEmitter<false>();

    @Input() public isLoading = false;
    @Input() public playerOneScore: number;
    @Input() public playerTwoScore: number;

    constructor() { }

    public ngOnChanges(): void {
        if (this.playerOneScore && this.playerTwoScore) {
            this.roundEnd.emit(true);
        }
    }
}
