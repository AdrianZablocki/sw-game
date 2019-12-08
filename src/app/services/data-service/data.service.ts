import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API, peoplePage, starshipPage } from 'src/config';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) { }

    private setRandomPage(arr: String[]): any {
        const min: number = 0;
        const max: number = arr.length;

        return arr[Math.floor(Math.random() * (max - min) + min)];
    }

    public getStarships(): Observable<any> {
        return this.http.get(`${API.starships}${this.setRandomPage(starshipPage)}`)
    }

    public getCharacters(): Observable<any> {
        return this.http.get(`${API.characters}${this.setRandomPage(peoplePage)}`)
    }
}
