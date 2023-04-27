import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
// import * as dotenv from 'dotenv' 


// const options = {
//   method: 'GET',
//   url: 'https://moviesdatabase.p.rapidapi.com/titles',
//   headers: {
//     'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
//     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
//   }
// };

// const options1 = {
//   method: 'GET',
//   url: 'https://moviesdatabase.p.rapidapi.com/actors',
//   headers: {
//     'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
//     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
//   }
// };


// instagram -- cant do it this way add this in useEffect
// const options2 = ({
//   method: 'get',
//   url: import.meta.env.VITE_INSTA_URL, 
//   params: {},
// }).then(function (response) {
//       // handle success
//       console.log(response.data);
//       // setActors(response.data.data);
// }).catch(function (error) {
//       // handle error
//       console.log(error);
// })

function App() {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);

//  useEffect(() => {
//   axios.request(options).then(function (response) {
//     console.log(response.data.results);
//     // setMovies(response.data.results);
//    
//   }).catch(function (error) {
//     console.error(error);
//   }); },[])

  // useEffect(() => {
  //   axios.request(options1).then(function (response) {
  //     console.log(response.data.results);
  //     setActors(response.data.results);
  //   }).catch(function (error) {
  //     console.error(error);
  //   }); },[])


//Multiple Axios request in same useEffect:
//https://stackoverflow.com/questions/61385454/how-to-post-multiple-axios-requests-at-the-same-time

//   useEffect(() => {
//   axios.all([
//     axios.request(options), 
//     axios.request(options1)
//   ])
//   .then(axios.spread((obj1, obj2) => {
//     // Both requests are now complete
//     console.log(obj1.data.results),
//     setMovies(obj1.data.results),
//     console.log(obj2.data.results),
//     setActors(obj2.data.results)
//   }));
// }, [])
  

// instagram
useEffect(() => {
  axios({
    method: 'get',
    url: import.meta.env.VITE_INSTA_URL, 
    params: {},
}).then(function (response) {
        // handle success
        //console.log(response.data);
        setActors(response.data.data)
}).catch(function (error) {
        // handle error
        console.log(error);
}) },[])

  return (
    <div style={{color:"white"}}>
      <p>shas</p>

      {/* actors api */}
      {
        actors.map((val) => {
            return(
              
              <div key={val.id}>
              <a href={val.permalink}>
              <img src={val.media_url}>
              </img>
              <p>
              caption: {val.caption}
              </p>
              </a>
              </div>
             
            )
        })
      }


      {/* title api */}
      {/* {
        movies.map((val) => {
            return(
              <div key={val.id}>
              <p>Title name: {val.titleText.text} | 
              Release date: {val.releaseYear.year}
              </p>
              </div>
            )
        })
      } */}

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
