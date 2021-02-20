//==== this code for inserting data from fiddler=====
import React,{useState} from 'react';
import MovieSearch from './MovieSearch';
import Display from './Display';
export default function Movie(){
    const [movie,setMovies] = useState([]);
    const Function1 = (title) => {
            //const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5b2af3d3&t=' + title;
            const url = 'http://127.0.0.1:8000/api/movies?MovieName=' + title;
                fetch(url)
                .then((res)=>{return res.json()})
                .then((data)=>{setMovies(data[0]);}) 
    }
 //console.log(movie)

    return(
        <div className="container">
            <MovieSearch usersData={Function1}/>
        <div classname="row">
            {    
               <div className="col-md-4 offset-3">
               {/* <Display poster={movie.Poster} title={movie.Title} actors={movie.Actors} director={movie.Director} genre={movie.Genre} runtime={movie.Runtime}/>*/}
               {/* movieInfo.map(item=><MovieDisplay  title={item[0].moviename} actors={item[0].actors} 
                director={item[0].director} genre={item[0].genre} duration={item[0].duration} />)
                 
                */}
                <Display MovieName={movie.MovieName}
                 Actors={movie.Actors}
                 Director={movie.Director} 
                 Genre={movie.Genre} 
                 Duration={movie.Duration}/>
                </div>
            }
        </div>
        </div>
    )
}
//=========================================================================
//===this code for performing CRUD Operations from react framework===





