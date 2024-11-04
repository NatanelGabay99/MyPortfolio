import { countries } from "./services/countriesService.js";
import { createCardsList } from "./services/DOMservice.js";

createCardsList(countries);

console.log(countries);