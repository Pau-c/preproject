const API_KEY_carousel = '14e4b022e185e0d7da5d814d71c2996c';
const URL_DISCOVER_carousel = "https://api.themoviedb.org/3/discover/tv";
const URL_IMAGE_carousel = "https://image.tmdb.org/t/p/original";
const LANGUAGE_carousel = "&language=es-ES";
const FILTER_POPULARITY_carousel = "&sort_by=popularity.desc&with_origin_country=US";




// fetch data from  API
async function fetchData_carousel(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

 
// carousel cards
async function populateCarousel() {
    const carouselSection = document.getElementById('carousel-cards');
    const url = `${URL_DISCOVER_carousel}?api_key=${API_KEY_carousel}${FILTER_POPULARITY_carousel}${LANGUAGE_carousel}&page=2`;
    const results = await fetchData_carousel(url);
    
    carouselSection.innerHTML = results.map(result => `
      <div class="carousel-item card ">
        <img src="${URL_IMAGE_carousel}${result.poster_path}" class="d-block card-img-top  .img-fluid .img-thumbnail rounded" alt="${result.name}">
      </div>
    `).join('');
    
    const firstItem = carouselSection.querySelector('.carousel-item');
    if (firstItem) {
      firstItem.classList.add('active'); // Add 'active' class to first carousel item
    }
  }
  


// Call functions 
populateCarousel();
