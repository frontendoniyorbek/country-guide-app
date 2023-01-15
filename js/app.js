const elRegionsList = document.querySelector(".regions__list");
const elForm = document.querySelector(".form");

elForm.search.focus();

//search by name
elForm['search-form__input'].addEventListener('input', () => {
    const inputValue = elForm['search-form__input'].value.toLowerCase();
    const name = document.querySelectorAll(".regions__content-heading");
})

const update = (date) => {
    elRegionsList.innerHTML = ""
    date.forEach((country) => {
        const {
            name,
            capital,
            population,
            continents,
            currencies,
            languages,
            flags,
        } = country;
        if (country.capital) {
            elRegionsList.innerHTML += `
        <li class="regions__item">
        <img class="regions__img" src="${country.flags.svg}" alt="">
        <div class="regions__content">
            <h3 class="regions__content-heading">
                ${country.name.common}
            </h3>
            <div class="regions__item-content">
                <h4 class="regions__item-heading">Population:</h4>
                <p class="regions__item-text">${country.population}</p>
            </div>
            <div class="regions__item-content">
                <h4 class="regions__item-heading">Region:</h4>
                <p class="regions__item-text">${country.region}</p>
            </div>
            <div class="regions__item-content">
                <h4 class="regions__item-heading">Capital:</h4>
                <p class="regions__item-text">${country.capital}</p>
            </div>
            <div class="regions__item-content">
                <h4 class="regions__item-heading">Currency:</h4>
                <p class="regions__item-text">${currencies
                    ? `${Object.values(currencies)[0].name
                    } - ${Object.keys(currencies)}`
                    : ""
                }</p >
            </div >
            <div class="regions__item-content">
                <h4 class="regions__item-heading">Common Languages::</h4>
                <p class="regions__item-text">${Object.values(languages)}</p>
            </div>
        </div >
        </li > `;
        } else {
            elRegionsList.innerHTML += `
    < li class="regions__item" >
        <img class="regions__img" src="${country.flags.svg}" alt="">
            <div class="regions__content">
                <h3 class="regions__content-heading">
                    <a class="regions__content-link" href="main.html">${country.name.common}</a>
                </h3>
                <div class="regions__item-content">
                    <h4 class="regions__item-heading">Population:</h4>
                    <p class="regions__item-text">${country.population}</p>
                </div>
                <div class="regions__item-content">
                    <h4 class="regions__item-heading">Region:</h4>
                    <p class="regions__item-text">${country.region}</p>
                </div>
                <div class="regions__item-content">
                    <h4 class="regions__item-heading">Capital:</h4>
                    <p class="regions__item-text">No capital</p>
                </div>
            </div>
        </li>`;
        }
    });
}

elForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const countryName = elForm.search.value.trim();
    elForm.reset();
    const API = `https://restcountries.com/v3.1/name/${countryName}`;
    reload(API)
});