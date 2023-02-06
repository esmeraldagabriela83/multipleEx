import React , {useState , useEffect}from "react";
import '../App.css';


function Movie(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //----------------------

const [endPoint , setEndPoint]=useState('');

const [moviesContainer , setMoviesContainer]=useState([]);

const [finalPoint , setFinalPoint]=useState("");

//-------------------------------

useEffect(() =>{
    //apel functie
    fetchMovie();
} , [finalPoint]);


//------------------------------

const fetchMovie=(event) =>{
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '08b5381c26msh054d91de7c0c3e5p12d313jsn5f7569645072',
    //         'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    //     }
    // };
    
    // fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, options)
    //     .then(response => {
    //         return(response.json());
    //     })
    //     .then(data => {
    //         console.log("movie data : " , data);
    //         console.log("movie data.d : " , data.d);
    //         setMoviesContainer(data.d);
    //         console.log("movie data.d.length : " , data.d.length);
    //     })
    //     .catch(err => console.error(err));
}

//-------------------------------

const onChangeHandler=(event) =>{
    event.preventDefault();
    setEndPoint(event.target.value);
    console.log(endPoint);
}

  //-------------------------

const submitHandler=(event) =>{
    event.preventDefault();
    console.log("you clicked the submit movie btn");
    setFinalPoint(endPoint);
}

//------------------------------------------
return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

 
    <form onSubmit={submitHandler}>

        <label htmlFor="123movie">Write your movie</label><br></br>
        <input type="text" name="movie" id="123movie" value={endPoint} onChange={onChangeHandler}/><br></br>
        <button type="submit">Submit movie</button>

    </form>

    <article className="container" style={{display:"flex" , alignItems:"center" , justifyContent:"center", flexWrap:"wrap" , padding:"1em" , border:"1px solid pink"}}>
        {moviesContainer.map((movie , index) =>{
            //map are intotdeauna return
            return(<>
            
            <div key={index} className="card" style={{width:"300px" , margin:"0.5em"}}>
  <img src={movie.i.imageUrl} className="card-img-top" alt="movie-api-img"/>
  <div className="card-body">
    <h5 className="card-title" style={{color:propColor}}>{movie.id}</h5>
    <h5 className="card-title">{movie.l}</h5>
    <h5 className="card-title" style={{color:propColor}}></h5>
    <p className="card-text">{movie.s}</p>
    <a href="https://rapidapi.com/apidojo/api/imdb8/" target="_blank"  className="btn btn-primary">API movie</a>
  </div>
</div>
            
            </>);
        })}
    </article>

  </>);

}

export default Movie;
