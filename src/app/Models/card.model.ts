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
        this.name = obj && obj.name || null;
        this.crew = obj && obj.crew || null;
        this.starshipClass = obj && obj.starship_class || null;
        this.maxAtmospheringSpeed = obj && obj.max_atmosphering_speed || null;
        this.manufacturer = obj && obj.manufacturer || null;
        this.mass = obj && obj.mass || null;
        this.height = obj && obj.height || null;
        this.gender = obj && obj.gender || null;
        this.birthYear = obj && obj.birth_year || null;
    }
}
