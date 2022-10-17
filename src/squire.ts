import { Character } from "./character";



export class Squire extends Character {
    degreePelotismo: number;
    serving: string;

    constructor(name: string, family: string, age: number, serving:string,degreePelotismo:number) {
        super(name, family, age);
        this.message = 'Soy un loser';
        this.serving=serving;
        this.degreePelotismo=degreePelotismo
    }
    comunique(): string {
        return this.message
    }
}