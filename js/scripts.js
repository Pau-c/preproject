const API_KEY = '14e4b022e185e0d7da5d814d71c2996c';
const URL_DISCOVER = "https://api.themoviedb.org/3/discover/tv";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";
const LANGUAGE = "&language=es-ES";
const FILTER_POPULARITY = "&sort_by=popularity.desc&with_origin_country=US";
const URLSEARCH = "https://api.themoviedb.org/3/search/tv";
 const url = `${URL_DISCOVER}?api_key=${API_KEY}${FILTER_POPULARITY}${LANGUAGE}`;

// fetch data from  API
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

 
//  grid cards
async function populateGrid() {
  const gridSection = document.getElementById('grid-cards');
  const results = await fetchData(url);
  gridSection.innerHTML = results.map(result => `
    <div class="card animGrid">
      <img src="${URL_IMAGE}${result.poster_path}" class="card-img-top .img-fluid .img-thumbnail rounded fade-in-center" alt="${result.name}">
      <div class="card-body">
        <h5 class="card-title" style="visibility: hidden">${result.name}</h5> 
      </div>
    </div>
  `).join('');

  // Add event listeners to toggle visibility of card title on hover
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.card-title').style.visibility = 'visible';
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.card-title').style.visibility = 'hidden';
    });
  });
}

// Call functions 
populateGrid();
