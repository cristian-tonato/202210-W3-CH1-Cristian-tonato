import { Character } from "./character";


export class Fighter extends Character{
    weapon:string;
    ability:number;
    constructor(name: string, family: string, age: number, weapon:string,ability: number){
        super(name, family, age);
        this.message = 'Primero pego y luego pregunto';
        this.weapon=weapon;
        this.ability=ability;
    }
    comunique(): string {
        return this.message;
    }
}