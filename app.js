//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=76bc45efd96042055a42ae5ab6cc35b2
//https://www.themoviedb.org/t/p/w440_and_h660_face
//https://api.themoviedb.org/3/search/movie?&api_key=76bc45efd96042055a42ae5ab6cc35b2&query=

const apiUrl="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=76bc45efd96042055a42ae5ab6cc35b2";

const imgPath="https://www.themoviedb.org/t/p/w440_and_h660_face";
const searchApi ="https://api.themoviedb.org/3/search/movie?&api_key=76bc45efd96042055a42ae5ab6cc35b2&query=";
const movieBox =document.querySelector("#movie-box");
const search =document.querySelector("#search");

const getMovies =async (url)=>{
    const response =await fetch(url)
    const data = await response.json()
     showMovies (data.results)
}

getMovies(apiUrl);

const showMovies = (data)=> {
    movieBox.innerHTML="";
data.forEach( (item)=>{


    const box=document.createElement("div")
    box.classList.add("box")
    box.innerHTML =`
    <img src="${imgPath +item.poster_path}" alt="">
    <div class="overlay">
        <div class="title">
            <h2>${item.title}</h2>
            <span>${item.vote_average}</span>
        </div>

        <h3>Overview:</h3>
        <p>${item.overview}</p>
    </div>
    `;

    movieBox.appendChild(box);
})
}

 search.addEventListener( "keyup", function (event){

    if (event.target.value !=""){
        getMovies(searchApi+event.target.value)
        console.log(event.target.value)
    }
    else {
        getMovies(apiUrl)
    }
 })