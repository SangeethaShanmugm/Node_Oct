//promise

function getCountries() {
    const url = "https://restcountries.com/v3.1/all";

    //fetch data using promise
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data));
}

getCountries()

//async await

async function getCountries1() {
    const url = "https://restcountries.com/v3.1/all";

    //fetch data using async/await
    let res = await fetch(url)
    let data = await res.json()
    console.log(data[0].name.common)
    data.forEach((country) => {
        // console.log(country.capitalInfo.latlng[0])
        const capitalInfo = country.capitalInfo;
        const [lat, long] = capitalInfo.latlng
        console.log(`Name: ${country.name.common}, Population: ${country.population}, Lat: ${lat}, Long:${long}`)
    })
}

getCountries1()