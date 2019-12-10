export class Card {
    name: string;
    crew: string;
    length: string;
    starshipClass: string;
    maxAtmospheringSpeed: string;
    manufacturer: string;
    hyperdriveRating: string;
    mass: string;
    height: string;
    gender: string;
    birthYear: string;
    eyeColor: string;
    hairColor: string;

    constructor(obj?: any) {
        this.name = obj && obj.name || null;
        this.crew = obj && obj.crew || null;
        this.length = obj && obj.length || null;
        this.starshipClass = obj && obj.starship_class || null;
        this.maxAtmospheringSpeed = obj && obj.max_atmosphering_speed || null;
        this.manufacturer = obj && obj.manufacturer || null;
        this.hyperdriveRating = obj && obj.hyperdrive_rating || null;
        this.mass = obj && obj.mass || null;
        this.height = obj && obj.height || null;
        this.gender = obj && obj.gender || null;
        this.birthYear = obj && obj.birth_year || null;
        this.eyeColor = obj && obj.eye_color || null;
        this.hairColor = obj && obj.hair_color || null;

    }
}
