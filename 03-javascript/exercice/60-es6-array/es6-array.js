'use strict'

const USER_ARRAY = [
    { id: 1, name: 'Martin', age: 45 },
    { id: 2, name: 'Pierre', age: 15 },
    { id: 3, name: 'Josée', age: 14 },
    { id: 4, name: 'Melanie', age: 32 },
    { id: 5, name: 'Sonia', age: 24 }
]

function getAge(item) {
    return item.age;
}

/* Résultat 1 */
const ages = USER_ARRAY.map(getAge)
console.log(ages)

function isAgeGt15(item){
    return item.age > 15
}

/* Résultat 2 */
const userGt15 = USER_ARRAY.filter(isAgeGt15);
console.log(userGt15)

/* Résultat 3 */

function sum(sumPart, item){
    return sumPart + item.age 
}

const meanAge = USER_ARRAY.reduce(sum,0)/USER_ARRAY.length
console.log(meanAge)
