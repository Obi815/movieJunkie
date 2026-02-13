// Created event listener for search button to search when clicked
document.querySelector('#btn').addEventListener('click', getFetch);

function getFetch() {
  // calls TMDB API to find requested movie
  const choice = document.querySelector('input').value.trim();
  const url = `https://api.themoviedb.org/3/search/movie?api_key=3c111c26b6ae2ffe0c8748c0b03b23a2&results&query=${encodeURIComponent(choice)}&page=1`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.results); // <-- movies found
      const img = document.createElement('img');
      const movieSection = document.getElementById('movies');

      // WORK ON PINNING IMAGE TO DOCUMENT!!!!!
      img.src = `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
      movieSection.appendChild(img);
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}