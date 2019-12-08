import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { DataService } from './services/data-service/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Star Wars Battle';

    constructor(private data: DataService) { }

    public getStarships() {
        return this.data.getStarships().subscribe(data => console.log(data));
    }

    public getPeople() {
        return this.data.getPeople().subscribe(data => console.log(data));
    }
}
