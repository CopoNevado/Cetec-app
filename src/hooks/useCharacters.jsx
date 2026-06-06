import {useEffect,useState} from "react"
import {getCharacters} from "../services/api"

function useCharacters(){

const[characters,setCharacters]=useState([])
const[loading,setLoading]=useState(true)
const[error,setError]=useState(null)

useEffect(()=>{

async function loadData(){

try{

const data=await getCharacters()

setCharacters(data)

}catch(error){

setError(error.message)

}finally{

setLoading(false)

}

}

loadData()

},[])

return{

characters,
loading,
error

}

}

export default useCharacters