 
import './App.css';
import Countries from './Components/Countries/Countries';
 
 
// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}




// function LoadCountries() {
//    const [countries, setCountries] = useState([]);
//    useEffect(() => {
//         fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data =>  setCountries(data))   
//    }, [])

//   return (
//     <div>
//       <h1>visiting all country of the world</h1>
//       <p>Available country : {countries.length}</p>
//       {
//         countries.map(coutry => <Country name = {coutry.name.common} capital = {coutry.capital}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div>
//       <h2>Name : {props.name}</h2>
//       <h3>Capital : {props.capital}</h3>
//     </div>
//   )
// }

export default App;
