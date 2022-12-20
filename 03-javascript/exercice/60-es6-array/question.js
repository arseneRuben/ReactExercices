/**
 * Exercice - ES6 Array
 *
 * Objectifs:
 *  - Utiliser les fonctions ES6 pour la manipulation des objets Array (map, filter, reduce)
 *
 * Consignes:
 *  - Créer le fichier es6-array.js
 *  - En utilisant la structure de données USER_ARRAY, écrire le code pour produire les 3 résultats suivants
 *
 * Note:
 *  - Ne pas utiliser de boucle (for, forEach, while, ....)
 *  - Ne pas utiliser la commande delete
 */

'use strict'

const USER_ARRAY = [
    { id: 1, name: 'Martin', age: 45 },
    { id: 2, name: 'Pierre', age: 15 },
    { id: 3, name: 'Josée', age: 14 },
    { id: 4, name: 'Melanie', age: 32 },
    { id: 5, name: 'Sonia', age: 24 }
]

/* Résultat 1 (retirer la propriété "age" de tous les objets de la collection) */

    [
        { id: 1, name: 'Martin' },
        { id: 2, name: 'Pierre' },
        { id: 3, name: 'Josée' },
        { id: 4, name: 'Melanie' },
        { id: 5, name: 'Sonia' }
    ]

/* Résultat 2 (conservez seulement les objets de la collection dont la propriété "age" est supérieure a 15) */

    [
        { id: 1, name: 'Martin', age: 45 },
        { id: 4, name: 'Melanie', age: 32 },
        { id: 5, name: 'Sonia', age: 24 }
    ]

/* Résultat 3 (calculer la moyenne d'âge de la collection) */

26
