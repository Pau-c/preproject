
const API_KEY_search = '14e4b022e185e0d7da5d814d71c2996c';

const URL_IMAGE_search = "https://image.tmdb.org/t/p/original";
const LANGUAGE_search = "&language=es-ES";
const FILTER_POPULARITY_search = "&sort_by=popularity.desc&with_origin_country=US";
const URLSEARCH_search = "https://api.themoviedb.org/3/search/tv";



// fetch data from  API
async function fetchData_search(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}




// Event listener for search button. Not working yet
document.getElementById('search-button').addEventListener('click', async () => {
    const query = document.getElementById('search-input').value;
    const url = `${URLSEARCH_search}?api_key=${API_KEY_search}&query=${query}`;
    const results = await fetchData_search(url);
   // console.log(results); 
  });
  
  //Animation for search box on load
  
   const input = document.getElementById('search-section');
   const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('animFromTop'); // Add animation class
         observer.unobserve(entry.target); // Stop observing once animation applied
       }
     });
   });

   //call
   observer.observe(input);