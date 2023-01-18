/**
 * Exercice - Pays et villes
 *
 * Consignes:
 * - Créer le conteneur FormContainer
 * - Utiliser la syntaxe suivante pour charger le fichier JSON dans votre code
 *      import * as countries from '../../all-countries-and-cities-json-master/countries.min.json'
 *
 * - Initialiser le state de cette façon
 *      this.state = { countries: countries.default }
 *
 * - La température est obtenue en exécutant une requête asynchrone sur le service http://api.openweathermap.org
 *      https://openweathermap.org/current
 *
 * - La requête nécessite la syntaxe suivante. (Dans cet exemple, la requête est pour la ville Montréal)
 *      http://api.openweathermap.org/data/2.5/weather?q=Montreal&APPID=52261c83c6e8a4c8e14e163120944701
 *
 * - Le résultat doit être affiché en degrés Celsius
 *
 * Note: Référence importante pour réaliser l'itération des "countries"
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 *
 */
