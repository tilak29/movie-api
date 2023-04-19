import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles',
  headers: {
    'X-RapidAPI-Key': ;
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

function App() {
  const [movies, setMovies] = useState([]);

 useEffect(() => {
  axios.request(options).then(function (response) {
    console.log(response.data.results);
    setMovies(response.data.results);
  }).catch(function (error) {
    console.error(error);
  }); },[])

  return (
    <div className="App">
      <p>shas</p>

      {/* actors api */}
      {/* {
        movies.map((val) => {
            return(
              <div key={val.nconst}>
              <p>name: {val.primaryName} | 
              birthday: {val.birthYear}
              </p>
              </div>
            )
        })
      } */}


      {/* title api */}
      {
        movies.map((val) => {
            return(
              <div key={val.id}>
              <p>name: {val.titleText.text} | 
              birthday: {val.releaseYear.year}
              </p>
              </div>
            )
        })
      }

{/* https://www.youtube.com/watch?v=V0KsFee5iSc */}

      {/* {
        movies && movies.filter((movie) => movie.nconst === "nm0000007").map((movie) => {
          return(
            <div key={movie.nconst}>
        <p>name: {movie.primaryName} | name : {movie.birthYear}</p>
        </div>)  
        })
      } */}

      
    </div>
  )
}

export default App
