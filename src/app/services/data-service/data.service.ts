import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { API, peoplePage, starshipPage } from 'src/config';
import { ICard, IData } from 'src/app/Models';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private cards = 3;
    constructor(private http: HttpClient) { }

    private setRandomPage(arr: string[]): any {
        const min = 0;
        const max = arr.length;

        return arr[Math.floor(Math.random() * (max - min) + min)];
    }

    private shufleCards(array: ICard[]): ICard[] {
        const shuffledArray = [];
        for (const i in array) {
            // fix for lint error (for (... in ...) statements must be filtered with an if statement)
            if (array.hasOwnProperty(i)) {
                let randomIndex = Math.floor(Math.random() * array.length);
                while (shuffledArray.includes(array[randomIndex])) {
                    randomIndex = Math.floor(Math.random() * array.length);
                }
                shuffledArray[i] = array[randomIndex];
            }
        }
        return shuffledArray;
    }

    public getStarships(): Observable<ICard[]> {
        return this.http.get(`${API.starships}${this.setRandomPage(starshipPage)}`).pipe(
            map((res: IData): ICard[] => {
                console.log(res.results);
                return this.shufleCards(res.results).slice(0, this.cards);
            })
        );
    }

    public getCharacters(): Observable<any> {
        return this.http.get(`${API.characters}${this.setRandomPage(peoplePage)}`);
    }
}
