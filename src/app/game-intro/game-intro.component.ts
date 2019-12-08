import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameIntroDialogComponent } from './game-intro-dialog/game-intro-dialog.component';

@Component({
    selector: 'game-intro',
    templateUrl: './game-intro.component.html',
    styleUrls: ['./game-intro.component.scss']
})
export class GameIntroComponent {
    @Output() public charactersBattle: EventEmitter<any> = new EventEmitter<any>();
    @Output() public starshipsBattle: EventEmitter<any> = new EventEmitter<any>();

    constructor(private dialog: MatDialog) { }

    public onChooseCharactersBattle(): void {
        this.charactersBattle.emit();
    }

    public onChooseStarshipsBattle(): void {
        this.starshipsBattle.emit();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(GameIntroDialogComponent, {
            width: '250px',
            // data: { name: 'this.name', animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }
}
