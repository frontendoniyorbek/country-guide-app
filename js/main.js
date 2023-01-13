const elRegionsList = document.querySelector('.regions__list')
const elForm = document.querySelector('.form')

elForm.search.focus()

// for leader
const overlay = document.getElementById('overlay')

// toggle loader
const loaderToggle = (togle) => {
    if (togle) {
        overlay.classList.remove('hidden')
    } else {
        overlay.classList.add('hidden')
    }
}

const API = "https://restcountries.com/v3.1/all";
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState < 4) {
        loaderToggle(true)
    } else if (request.status == 200 && request.readyState == 4) {
        update(JSON.parse(request.responseText))
        console.log(JSON.parse(request.responseText))
        loaderToggle(false)
    } else if (request.readyState == 4) {
        loaderToggle(false)
    }
})

request.open('GET', API)
request.send()

function update(date) {
    date.forEach((country) => {
        if (country.capital) {
            elRegionsList.innerHTML += `
            <li class="regions__item">
            <div class="img-wrapper">
                <img class="regions__img" src="${country.flags.svg}" alt="">
            </div>
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
                    <p class="regions__item-text">${country.capital}</p>
                </div>
            </div>
        </li>`
        }
    })
}

elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const countryName = elForm.search.value.trim()
    console.log(countryName);
    elForm.reset()
})