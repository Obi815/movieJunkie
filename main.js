// document.querySelector('#btn').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   // console.log(choice)
//   const url = `https://api.themoviedb.org/3/discover/movie?api_key=3c111c26b6ae2ffe0c8748c0b03b23a2&results=${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

document.querySelector('#btn').addEventListener('click', getFetch);

function getFetch() {
  const choice = document.querySelector('input').value.trim();

  const url = `https://api.themoviedb.org/3/search/movie?api_key=3c111c26b6ae2ffe0c8748c0b03b23a2&results&query=${encodeURIComponent(choice)}&page=1`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.results); // <-- movies found
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}