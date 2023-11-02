import CardLocation from "./components/CardLocation.jsx";

import "./App.css";
import { useEffect, useState } from "react";


function App() {

  const [locations, setLoactions] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [nbPages, setNbPages] = useState(0)
  useEffect(() => {
    async function fetchLocation() {
      const resp = await fetch(`https://rickandmortyapi.com/api/location?page=${currentPage}`);
      const data = await resp.json();
      setNbPages(data.info.pages)
      setLoactions(data.results);
    }

    fetchLocation();
  }, [currentPage]);

const handleNextPage = () => {
  currentPage  < nbPages ?  setCurrentPage(currentPage + 1) : null
 

} 

const handlePrevPage = () =>{
  currentPage >  1 ?  setCurrentPage(currentPage - 1) : null
 
}


  return (
    <>
      <header>
        <img
          src="../assets/logoRick.png"
          alt="rick et morty logo"
          className="m-auto w-56"
        />
      </header>
      <section className="container mx-auto">
          <div className="flex flex-wrap justify-between h-full">
            {locations.map((location: any) => (
              <CardLocation
                name={location.name}
                dimension={location.dimension}
                type={location.type}
                univers={location.name}
                key={location.id}
                id={location.id}
              />
            ))}
          </div>
          
     
        <div className="flex justify-around w-full my-10">
            <button className="shadow-lime-500 shadow w-1/4 rounded p-2" onClick={handlePrevPage}>Prev</button>
            <button className="shadow-lime-500 shadow w-1/4 rounded" onClick={handleNextPage}>Next</button>
          </div>
      </section>
    </>
  );
}

export default App;
