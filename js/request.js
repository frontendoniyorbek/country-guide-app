// for leader
const overlay = document.getElementById("overlay");

// toggle loader
const loaderToggle = (toggle) => {
    if (toggle) {
        overlay.classList.remove("hidden");
    } else {
        overlay.classList.add("hidden");
    }
};


// request promise
const getDate = (resource) => {
    return new Promise((resove, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                loaderToggle(true)
            } else if (request.status == 200 && request.readyState == 4) {
                const date = (JSON.parse(request.responseText))
                console.log(date);
                resove(date);
                loaderToggle(false)
            } else if (reject.readyState == 4) {
                reject("Error!!!");
                loaderToggle(false);
            }
        })

        request.open('GET', resource)
        request.send()
    })
}

// load
const reload = (api) => {
    getDate(api)
        .then((date) => {
            update(date);
        })
        .catch((err) => { });
};