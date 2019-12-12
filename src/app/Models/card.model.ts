export class Card {
    name: string;
    crew: string;
    starshipClass: string;
    maxAtmospheringSpeed: string;
    manufacturer: string;
    mass: string;
    height: string;
    gender: string;
    birthYear: string;

    constructor(obj?: any) {
        this.name = obj && obj.name;
        this.crew = obj && (obj.crew === 'unknown' ? '20' : obj.crew);
        this.starshipClass = obj && obj.starship_class;
        this.maxAtmospheringSpeed = obj &&
            (obj.max_atmosphering_speed === 'unknown' || obj.max_atmosphering_speed === 'n/a' ? '1200' : obj.max_atmosphering_speed);
        this.manufacturer = obj && obj.manufacturer;
        this.mass = obj && (obj.mass === 'unknown' ? '80' : obj.mass);
        this.height = obj && (obj.height === 'unknown' ? '170' : obj.height);
        this.gender = obj && obj.gender;
        this.birthYear = obj && obj.birth_year;
    }
}
