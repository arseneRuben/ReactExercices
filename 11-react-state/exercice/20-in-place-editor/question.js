/**
 * Exercice - In-place editor
 *
 *
 * Consignes:
 *  - Créer une composante InputComponent pour produire une balise input ou un affichage text
 *  - Créer une composante TextComponent pour produire une balise textarea ou un affichage text
 *  - Créer le conteneur FormContainer pour permettre l'édition du state ci-dessous
 *  - Chaque champ du formulaire devient éditable en cliquant sur la valeur.
 *  - Lorsqu'un champ devient éditable, tous les autres reviennent en lecture seule.
 *  - Sur un clic du bouton soumettre, le formulaire revient dans l'état initial (lecture seule).
 *  - Note: ne pas traiter la soumission dans cet exercice.
 */

this.state = {
    userNameIsEditing: false,
    userNameValue: 'mvachon',

    emailIsEditing: false,
    emailValue: 'mvachon@server.com',

    messageIsEditing: false,
    messageValue: 'message de test'
}
