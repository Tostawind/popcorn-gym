import Exercice from './exercice.interface';

export default interface Routine {
    id: string;
    name: string;
    exercises: Exercice[];
}