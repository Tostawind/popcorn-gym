import Routine from '../core/models/routine.interface';

export const routines: Routine[] = [
    {
        // id: crypto.randomUUID(),
        _id: 'r1234',
        name: 'Tirón',
        exercises: [
            {
                id: crypto.randomUUID(),
                position: 1,
                name: 'Remo en barra libre',
                sets: 3,
                reps: 10,
                rest: '2',
                weights: [
                    {
                        kg: 60,
                        equipment: 'Peso libre',
                        notes: '20kg barra + 10kg x 2'
                    },
                    {
                        kg: 80,
                        equipment: 'Máquina roja polea',
                        notes: ''
                    }
                ],
                notes: 'La barra de fuera pesa 20kgs pero está oxidada...',
                image: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Row_4beb1d94-bac9-4538-9578-2d9cf93ef008_600x600.png?v=1612138201'
            },
            {
                id: crypto.randomUUID(),
                position: 2,
                name: 'Jalón una mano',
                sets: 2,
                reps: 10,
                rest: '1',
                weights: [
                    {
                        kg: 35,
                        equipment: 'Máquina discos',
                        notes: 'Por lado'
                    }
                ],
                notes: '',
                image: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Deadlift_600x600.png?v=1619977112'
            },
            {
                id: crypto.randomUUID(),
                position: 3,
                name: 'Remo máquina placas',
                sets: 3,
                reps: 12,
                rest: '0.1',
                weights: [
                    {
                        kg: 30,
                        equipment: 'Máquina discos',
                        notes: 'Por lado'
                    }
                ],
                notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus?',
                image: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Shrug_4f8a4e15-96b9-4595-8e88-635bf83cc8ac_600x600.png?v=1612138751'
            },
            
        ]
    },
    {
        _id: crypto.randomUUID(),
        name: 'Empuje',
        exercises: [
            {
                id: crypto.randomUUID(),
                position: 1,
                name: 'Remo en barra libre',
                sets: 3,
                reps: 10,
                rest: '2',
                weights: [
                    {
                        kg: 60,
                        equipment: 'Peso libre',
                        notes: '20kg barra + 10kg x 2'
                    },
                    {
                        kg: 80,
                        equipment: 'Máquina roja polea',
                        notes: ''
                    }
                ],
                notes: 'La barra de fuera pesa 20kgs pero está oxidada...',
                image: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Row_4beb1d94-bac9-4538-9578-2d9cf93ef008_600x600.png?v=1612138201'
            },
            {
                id: crypto.randomUUID(),
                position: 2,
                name: 'Jalón una mano',
                sets: 2,
                reps: 10,
                rest: '1',
                weights: [
                    {
                        kg: 35,
                        equipment: 'Máquina discos',
                        notes: 'Por lado'
                    }
                ],
                notes: '',
                image: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Deadlift_600x600.png?v=1619977112'
            },
            {
                id: crypto.randomUUID(),
                position: 3,
                name: 'Remo máquina placas',
                sets: 3,
                reps: 12,
                rest: '0.1',
                weights: [
                    {
                        kg: 30,
                        equipment: 'Máquina discos',
                        notes: 'Por lado'
                    }
                ],
                notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus?',
                image: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Shrug_4f8a4e15-96b9-4595-8e88-635bf83cc8ac_600x600.png?v=1612138751'
            },
            
        ]
    }
]