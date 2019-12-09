import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    characterResource: string;
    starshipsResource: string;
}

@Component({
    selector: 'app-intro-dialog',
    templateUrl: './game-intro-dialog.component.html',
})
export class GameIntroDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<GameIntroDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }
}
