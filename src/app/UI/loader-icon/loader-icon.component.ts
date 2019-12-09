import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-loader-icon',
    templateUrl: './loader-icon.component.html',
    styleUrls: ['./loader-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderIconComponent {
    constructor() { }
}
