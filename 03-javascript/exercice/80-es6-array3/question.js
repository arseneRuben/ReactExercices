/**
 * Exercice - ES6 Array3
 *
 * Objectifs:
 *  - Utiliser les fonctions ES6 pour la manipulation des objets Array a plusieurs niveaux (map, filter, reduce)
  *
 * Consignes:
 *  - Créer le fichier es6-array3.js
 *  - Utiliser la structure de données CLASSROOMS.
 *  - Écrire le code pour produire la même structure de donnée contenant seulement les élèves dont l'âge est inférieur à 40 ans.
 *  - Le résultat doit être affiché au format JSON (voir exemple de résultat au bas de la page).
 *
 * Note:
 *  - Ne pas utiliser de boucle (for, forEach, while, ....)
 *  - On assume que l'étudiant existe ET que les noms sont uniques.
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
                âge: 40
            }
        ]
    }
]

// Exemple de résultat
    [
        {
            local: 500,
            title: 'Programmation Web 1',
            students: [
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
                }
            ]
        }
    ]
