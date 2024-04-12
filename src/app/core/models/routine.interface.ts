import Exercice from './exercice.interface';

export default interface Routine {
    _id: string;
    name: string;
    exercises: Exercice[];
}