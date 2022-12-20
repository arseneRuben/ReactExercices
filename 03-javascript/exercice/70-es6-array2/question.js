/**
 * Exercice - ES6 Array2
 *
 * Objectifs:
 *  - Utiliser les fonctions ES6 pour la manipulation des objets Array a plusieurs niveaux (map, filter, reduce)
 *
 * Consignes:
 *  - Créer le fichier es6-array2.js
 *  - En utilisant la structure de données CLASSROOMS, écrire le code pour afficher le numéro du local où se trouve l'étudiant Martin
 *
 * Note:
 *  - Ne pas utiliser de boucle (for, forEach, while, ....)
 *  - On assume que l'étudiant existe ET que les noms sont uniques.
 *
 **/
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
