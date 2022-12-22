/**
 * Exercice - node-fs
 *
 * Objectifs:
 *  - Création d'un  module NodeJs réutilisable qui se nomme node-fs
 *  - Le module est une librairie permettant d'utiliser le disque pour émuler une base de données pour la persistance d'une collection d'objets JSON.
 *
 * Consignes:
 *  - Initialiser un module NodeJs
 *  - Ajouter ESLint
 *  - Créer la structure de fichier suivante:
 *      - src/node-fs.js
 *      - index.js
 *      - test.js
 *
 * Implémenter les méthodes suivantes:
 *  - readDatas (fileName)
 *  - readData (fileName, id)
 *  - saveDatas (fileName, datas)
 *  - addData (fileName, data)
 *  - updateData (fileName, data)
 *
 *  - Les méthodes readData et updateData lance une exception si l'index n'existe pas.
 *      - L'exception a le message suivant: 'Element not found'
 *  - La méthode addData lance une exception si l'objet existe déjà
 *      - L'exception a le message suivant: 'Element already exists'
 *
 *  - Écrire un test pour chaque méthode.
 *  - Écrire au moins un test pour vérifier la présence d'exceptions.
 *
 *  - Utiliser les données suivantes pour exécuter le test
 */

const TEST_FILE_NAME = 'test.json'

const TEST_DATA = [
    { id: 100, userName: 'mvachon', age: 12 },
    { id: 101, userName: 'jcote', age: 66 },
    { id: 102, userName: 'pmartineau', age: 99 }
]
