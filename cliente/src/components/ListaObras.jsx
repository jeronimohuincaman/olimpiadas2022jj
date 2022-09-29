import React, { useEffect,useState  } from 'react'
import axios from 'axios'
import ObraIndividual from './ObraIndividual'

 function ListaObras() {
    const [dataObra, setdataObra] = useState([])

    useEffect(() => {
        axios.get('api/obra/obtenerobras').then(res=>{
            console.log(res.data)
            setdataObra(res.data)
        }).catch(err =>{
            console.log(err)
        })
    }, [])


    //mapear lista de obras en objeto obras
    const listaobras = dataObra.map(obra => {
        return(
            <div>
               <ObraIndividual obra={obra}/> 
            </div>
        )
    })
    return (
    <div>
        <h2>lista de obras</h2>
        {listaobras}
    </div>
  )
}
export default ListaObras