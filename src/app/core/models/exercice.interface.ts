export default interface Exercice     {
    id: string;
    position: number;
    name: string;
    sets: number;
    reps: number;
    rest: string;
    weights: Weight[];
    notes?: string;
    image: string;
}

export interface Weight {
    kg: number;
    equipment: string;
    notes: string;
}