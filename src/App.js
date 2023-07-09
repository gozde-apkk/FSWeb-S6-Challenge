import React,{useState, useEffect}from "react"
import Karakter from "./components/Karakter";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [dataChars,setDataChars] = useState([]);
  const [dataFilms, setDataFilms] = useState([]);
  const [loading,setLoading] = useState(true);



  useEffect(()=>{
    const charactersPromise = axios('https://swapi.dev/api/people/');
  const filmsPromise = axios('https://swapi.dev/api/films/');

  const timeOutPromise = new Promise ((resolve,reject)=> { setTimeout(resolve, 3000,"foo");
  });
  Promise.all([charactersPromise,filmsPromise,timeOutPromise]).then((values)=>{
    console.log(values);
    setDataChars(values[0].data)
    setDataFilms(values[1].data[0].results)
    setLoading(false);
  })
},[])

 
  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1> 
      {loading && <h1>Yükleniyor...</h1>}
      {!loading &&(
      <div>
      <Karakter chars={dataChars} films={dataFilms}/>
      </div>)}
    </div>
  );
}

export default App;
