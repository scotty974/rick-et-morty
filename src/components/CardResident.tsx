export default function CardResident({imageUrl, name, status,gender,species}:{imageUrl:string, name : string, status:string,gender:string,species:string}){
    
    return (
<div className="w-1/5 shadow p-5 my-2 mx-2 flex flex-col justify-between rounded">
    <div>
    <img src={imageUrl} alt={name} />
    </div>
    <div className="flex items-center justify-between">
    <h2 className="text-center my-5 font-sans">{name}</h2>
    <span className=" h-3 w-3 rounded-full" style={{backgroundColor : status === 'Alive' ? 'green' : 'red'}}></span>

    </div>
    <div className="flex justify-between">
    <p className="font-mono"><strong>{gender}</strong></p>
    <p>{species}</p>
    </div>
   
</div>
    )
}