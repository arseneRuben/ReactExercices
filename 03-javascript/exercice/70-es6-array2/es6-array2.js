'use strict'

const CLASSROOMS = [
    {
        local: 500,
        title: 'Programmation Web 1',
        students: [
            {
                name: 'Martin',
                age: 48
            },
            {
                name: 'Pierre',
                age: 26
            },
            {
                name: 'Julie',
                age: 34
            }
        ]
    },
    {
        local: 501,
        title: 'Structure Logicielle',
        students: [
            {
                name: 'Patrick',
                age: 27
            },
            {
                name: 'Steeve',
                age: 40
            }
        ]
    }
]

function getLocal(item) {
    return item.local;
}

function isMartin(std) {
    return std.name === "Martin"
}

function hasMartin(item){
    return item.students.filter(isMartin).length>0
}

console.log(CLASSROOMS.filter(hasMartin).map(getLocal))