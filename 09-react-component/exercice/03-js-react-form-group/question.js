/**
 * Exercice - JS React form group
 *
 * Objectifs:
 *  - Réaliser une composante qui crée une balise select avec des regroupements.
 *
 * Consignes:
 *  - Copier le répertoire /src du projet js-react
 *  - Crée la composante de présentation SelectGroupComponent pour ajouter le nouveau champ qui se nomme: dinosaur
 *      - La composante produit une balise select avec les paramètres suivants
 *          - text - Le texte pour la balise label
 *          - id - L'identifiant unique de la composante
 *          - options - Un array contenant le label du groupe et la collection du groupe.
 *              - Chaque item de la collection contient un label et un number
 *              - Utiliser la collection ci-dessous pour initialiser le paramètre options
 */

const OPTIONS = [{
    label: 'Theropods',
    options: [{
        label: 'Tyrannosaurus',
        number: 0
    }, {
        label: 'Velociraptor',
        number: 1
    }, {
        label: 'Deinonychus',
        number: 2
    }]
}, {
    label: 'Sauropods',
    options: [{
        label: 'Diplodocus',
        number: 3
    }, {
        label: 'Saltasaurus',
        number: 4
    }, {
        label: 'Apatosaurus',
        number: 5
    }]
}]
