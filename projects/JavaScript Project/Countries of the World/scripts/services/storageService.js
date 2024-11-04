let likedCountries = [];

const getData = () => {
    let data = localStorage.getItem('favouriteCountries');
    if (!data) {
        localStorage.setItem('favouriteCountries', JSON.stringify(likedCountries));
        data = localStorage.getItem('favouriteCountries');
    }
    likedCountries = JSON.parse(data);
}

const updateData = (countryName) => {
    if (likedCountries.includes(countryName)) {
        likedCountries = likedCountries.filter((item) => item !== countryName);
    }
    else {
        likedCountries.push(countryName);
    }
    localStorage.setItem('favouriteCountries', JSON.stringify(likedCountries));
}

export { getData, updateData, likedCountries };