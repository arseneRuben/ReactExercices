/**
 * Exercice - Callback
 *
 * Objectifs:
 *  - Implémentation de fonction de rappel (callback).
 *
 * Consignes:
 *  - Créer le fichier callback.js
 *  - Copier le code suivant et écrire le nécessaire pour produire le résultat ci-dessous
 *
 *
 * Opération = Addition
 * Valeur 1 = 2
 * Valeur 2 = 4
 * Résultat = 6
 *
 * Opération = Soustraction
 * Valeur 1 = 2
 * Valeur 2 = 4
 * Résultat = -2
 *
 * Opération = Division
 * Valeur 1 = 2
 * Valeur 2 = 4
 * Résultat = 0.5
 *
 */
'use strict'

function processMathCallback (val1, val2, callback) {
    const result = callback.execute(val1, val2)

    console.log('Valeur 1 = ' + val1)
    console.log('Valeur 2 = ' + val2)
    console.log('Opération = ' + callback.getOperation())
    console.log('Résultat = ' + result)
    console.log(' ')

    return result
}

processMathCallback(2, 4, AdditionCallback)
processMathCallback(2, 4, SubtractionCallback)
processMathCallback(2, 4, DivisionCallback)
