/**
 * Exercice - JS React form
 *
 * Objectifs:
 *  - Création de formulaires avec la librairie React
 *
 * Consignes:
 *  - Copier le répertoire /src du projet js-react dans le projet /09-react-component/exercice/01-js-react-form
 *  - Ajouter 2 champs de type text (firstName et lastName)
 *  - Ajouter un champ de type number (age)
 *  - Créer la composante de présentation SelectComponent pour ajouter un nouveau champ dans le formulaire qui se nomme country
 *      - La composante produit une balise HTML select avec les paramètres suivants
 *          text - Le texte pour la balise label
 *          id - L'identifiant unique de la composante
 *          value - L'option sélectionnée
 *          options - Un array contenant le nom et la valeur de chaque option
 *
 */

const OPTIONS = [{
    label: 'Afghanistan',
    value: '1'
}, {
    label: 'Afrique du Sud',
    value: '2'
}, {
    label: 'Albanie',
    value: '3'
}, {
    label: 'Algérie',
    value: '4'
}]
