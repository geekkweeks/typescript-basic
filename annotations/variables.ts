let position: number = 2
let myName: string = 'Alf'
let isCool: boolean = false
let nullvalue: null = null

let dateValue: Date = new Date()

let names: string[] = ['alf', 'zah', 'ole']
let scores: number[] = [3, 34, 4, 2, 2]
let boolArray: boolean[] = [true, false, false, false, false]

// type of variable will be any
let isCar
isCar = true



//Class
class Student { }
let student: Student = new Student()

// Object literals
let employee: { nik: number, name: string, address: string, isMarried: boolean } = {
    nik: 232,
    name: 'Alf',
    address: 'Bambu street',
    isMarried: false,
}


const epl = ['Arsenal', 'Mu', 'Chelsea', 'Liverpool']
let isArsenal: boolean;

// Union type
let isLiverpool: boolean | string

for (let i = 0; i < epl.length; i++) {
    if (epl[i].toLowerCase() === 'arsenal') {
        isArsenal = true
    }

    if (epl[i].toLowerCase() === 'liverpool') {
        isLiverpool = true
        isLiverpool = epl[i]
    }

}