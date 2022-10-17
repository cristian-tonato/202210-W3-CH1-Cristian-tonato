import { Adviser } from './adviser';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

export const characters = [
    new King('Joffrey', 'Baratheon', 20, 1),
    new Fighter('Jaime', 'Lanister', 30, 'Axe', 10),
    new Fighter('Daenerys', 'Targaryen', 16, 'Axe', 10),
    new Adviser('Tyrion', 'Lannister', 35, 'John Snow'),
    new Squire('Bronn', '', 25, `Jaime`, 10, ),
];

//console.log(characters)


