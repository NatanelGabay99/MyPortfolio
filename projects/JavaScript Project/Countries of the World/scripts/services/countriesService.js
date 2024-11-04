
const getCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    return data;
}

const countriesFull = await getCountries();
let countries = [...countriesFull];

const search = () => {
    let searchInput = document.getElementById('search').value;

    countries = countriesFull.filter((item) => {
        return item.name.common.toLowerCase().includes(searchInput.toLowerCase());
    })
}

const reset = () => {
    countries = [...countriesFull];
}

export { countries, search, reset };

// let obj = {}
// let obj2 = {...obj}

// let numbers1 = [100, 200, 300];
// let numbers2 = [...numbers1];

// numbers1[0] = 35;

// console.log(numbers1);
// console.log(numbers2);