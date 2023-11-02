import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardResident from "../../components/CardResident";

export default function Page() {
  const { id } = useParams();
const [residents, setResidents] = useState([])
const [residentsData, setResidentsData] = useState([])

useEffect(()=>{
    async function fetchResidents(){
        try{
            const resp = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
            const data = await resp.json()
         
            setResidents(data.residents)
      
            const residentsDataArray:any = await Promise.all(residents.map(async(residentUrl)=> {
              const resp = await fetch(residentUrl)
              const data = await resp.json()
              return data
            }))

            setResidentsData(residentsDataArray)
        }catch(error){
            console.log(error)
        }
    }
    fetchResidents()
},[residentsData])


  return (
    <section className="container m-auto">
      <div className="flex flex-wrap justify-between h-full">
          {residentsData.map((resident:any, index)=> <CardResident name={resident.name} imageUrl={resident.image} key={index} status={resident.status} gender={resident.gender} species={resident.species}/> )}
      </div>
    </section>
  );
}
