import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

import { ANIMATIONS } from 'src/app/config';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [ANIMATIONS.FADE_STANDARD]
})
export class LoaderComponent {
    @HostBinding('@fadeAnimationStandard') public fadeAnimationStandard = true;
    constructor() { }
}
