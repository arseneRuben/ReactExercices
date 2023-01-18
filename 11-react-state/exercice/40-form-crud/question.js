/**
 * Exercice - form-state
 *
 * Objectifs:
 *  - Création d'un écran permettant les opérations standard d'édition (CRUD).
 *
 * Consignes:
 *  - Créer le conteneur permettant la gestion du state ci-dessous.
 *  - Créer les composantes de présentation nécessaire
 *  - Crée le serveur qui sera responsable de la gestion de la structure ci-dessous
 *      - Pour simplifier l'exercice, le serveur conserve en mémoire seulement la structure de donnée USERS
 */

// State du conteneur

this.state = {
    // Les champs du formulaire
    formValues: {},
    // Indique si le formulaire doit être affiché
    showForm: false,
    // Collection d'objet affiché liste
    users: []
}

// Structure de donnée d'exemple du serveur

// Émulation d'une base de données en utilisant une collection d'objets en mémoire
const USERS = [
    {
        id: 1,
        userName: 'patate',
        firstName: 'Pat',
        lastName: 'Ate'
    },
    {
        id: 2,
        userName: 'gcote',
        firstName: 'Gros',
        lastName: 'Coté'
    },
    {
        id: 3,
        userName: 'fmartineau',
        firstName: 'François',
        lastName: 'Martineau'
    },
    {
        id: 4,
        userName: 'mstpierre',
        firstName: 'Marc',
        lastName: 'St-Pierre'
    },
    {
        id: 5,
        userName: 'msimard',
        firstName: 'Mélanie',
        lastName: 'Simard'
    },
    {
        id: 6,
        userName: 'agermain',
        firstName: 'Audrée',
        lastName: 'Germain'
    }
]

// La valeur du prochain ID pour la création d'un objet à ajouter dans la collection.
const nextId = USERS.length + 1
