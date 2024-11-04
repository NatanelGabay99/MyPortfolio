import { countries, reset, search } from "./countriesService.js";
import { getData, likedCountries, updateData } from "./storageService.js";

const cards = document.getElementById('cards');
const searchInput = document.getElementById('search');

    searchInput.addEventListener('input', (e) => {

        reset();
        if (e.target.value) {
            cards.innerHTML = '';
            search(e.target.value);
            createCardsList();

        } else {

            cards.innerHTML = '';
            createCardsList();
        }



    });


const createCard = (country) => {
    const card = document.createElement('div');
    card.className = 'card shadow m-2 col-md-3 col-sm-12';

    const cardImg = document.createElement('img');
    cardImg.className = 'card-img-top p-2 mt-2 border rounded shadow';
    cardImg.src = country.flags.png;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = country.name.common;

    const population = document.createElement('p');
    population.className = 'card-text';
    population.textContent = `Population: ${country.population}`;

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer d-flex justify-content-center mb-2';

    let heart = document.createElement('i');

    heart.addEventListener('click', () => {
        updateData(country.name.common);
        if (heart.classList.contains('text-dark')) {
            heart.className = 'fa fa-heart text-danger';
        } else {
            heart.className = 'fa fa-heart text-dark';
        }
    });

    let isLiked = false;
    getData();
    if (likedCountries.includes(country.name.common)) {
        isLiked = true;
    }

    heart.className = `fa fa-heart ${isLiked ? 'text-danger' : 'text-dark'}`;

    card.appendChild(cardImg);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(population);

    cardFooter.appendChild(heart);

    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    cards.appendChild(card);
}

const createCardsList = () => {
    countries.forEach((item) => {
        createCard(item);
    });

    // for (const item of countries) {
    //     createCard(item);
    // }
}

export { createCardsList };