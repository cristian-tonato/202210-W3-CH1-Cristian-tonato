import { Character } from "./character";

export class Adviser extends Character{
    adviserTo: string


    constructor(name:string, family:string, age:number, adviserTo: string){
        super(name,family,age);
        this.message = `No sé por qué, pero creo que voy a morir pronto`;
        this.adviserTo=adviserTo
    }
    comunique(): string {
        return this.message
    }
}
