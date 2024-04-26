const API_KEY = '14e4b022e185e0d7da5d814d71c2996c';
const URL_DISCOVER = "https://api.themoviedb.org/3/discover/tv";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";
const LANGUAGE = "&language=es-ES";
const FILTER_POPULARITY = "&sort_by=popularity.desc&with_origin_country=US";
const URLSEARCH = "https://api.themoviedb.org/3/search/tv";

// Function to fetch data from TMDB API
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

// Function to populate grid cards
async function populateGrid() {
  const gridSection = document.getElementById('grid-cards');
  const url = `${URL_DISCOVER}?api_key=${API_KEY}${FILTER_POPULARITY}${LANGUAGE}`;
  const results = await fetchData(url);
  gridSection.innerHTML = results.map(result => `
    <div class="card">
      <img src="${URL_IMAGE}${result.poster_path}" class="card-img-top  .img-fluid .img-thumbnail rounded" alt="${result.name}">
      <div class="card-body">
        <h5 class="card-title">${result.name}</h5>
      </div>
    </div>
  `).join('');
}

// Function to populate carousel cards
async function populateCarousel() {
    const carouselSection = document.getElementById('carousel-cards');
    const url = `${URL_DISCOVER}?api_key=${API_KEY}${FILTER_POPULARITY}${LANGUAGE}&page=2`;
    const results = await fetchData(url);
    
    carouselSection.innerHTML = results.map(result => `
      <div class="carousel-item card">
        <img src="${URL_IMAGE}${result.poster_path}" class="d-block card-img-top  .img-fluid .img-thumbnail rounded" alt="${result.name}">
      </div>
    `).join('');
    
    const firstItem = carouselSection.querySelector('.carousel-item');
    if (firstItem) {
      firstItem.classList.add('active'); // Add 'active' class to first carousel item
    }
  }
  

// Event listener for search button. Not working yet
document.getElementById('search-button').addEventListener('click', async () => {
  const query = document.getElementById('search-input').value;
  const url = `${URLSEARCH}?api_key=${API_KEY}&query=${query}`;
  const results = await fetchData(url);
  console.log(results); 
});

// Call functions to populate grid and carousel
populateGrid();
populateCarousel();
