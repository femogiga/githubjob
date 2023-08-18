

import { Filter } from "@mui/icons-material"
import { useData } from "../utility/useData"
import Card from "./homepage/Card"
import MainForm from "./homepage/MainForm"
import Paginator from "./homepage/Paginator"
import Search from "./homepage/Search"
import { useEffect, useState} from "react"

const  Container = ()=>{

    const[currentPage,setCurrentPage]=useState<number>(1)
  //  const[data,loading,error] = useData(currentPage)
  const[data,loading,error] = useData()
  const initialState = data.slice(0,5)
    const[mapped,setMapped] = useState<any>(initialState)
    const[inputValue,setInputValue]=useState<string>('United States')
    const[pageSize,setPageSize]=useState<number>(0)
    const[searchVal,setSearchVal] = useState('')

const perPage = 5;

useEffect(()=>{
  // setMapped(data.slice(currentPage===1?0:currentPage * perPage + currentPage,perPage))
  if(!loading && !error && inputValue){
     const startIndex = (currentPage - 1) * perPage
      const endIndex = startIndex +perPage
      // setMapped(data.slice(startIndex,endIndex))
      const total = data.filter(job=> job.locationRestrictions[0]===inputValue)
    setMapped(total.slice(startIndex,endIndex))
  setPageSize(Math.ceil(total.length/perPage))
  }

  console.log('inputValue' , inputValue)
  console.log(mapped)
},[data,currentPage,inputValue,searchVal])


const handleInputChange =(e:Event)=>{
  setInputValue('')
  setInputValue( (e.target as HTMLButtonElement).value )
setCurrentPage(1)
}
const handleSearch = (e:Event,searchVal)=>{
  e.preventDefault()
//  const searchTermResult =  data.filter(job=> job.companyName.toLowerCase() === searchVal.toLowerCase ||
//    job.locationRestrictions[0].toLowerCase === searchVal.toLowerCase() ||  job.title.includes(searchVal))
const searchTermResult =
data.filter(job=> job.title.toLowerCase().includes(searchVal.toLowerCase())
          || job.companyName.toLowerCase().includes(searchVal.toLowerCase())
          || job.seniority.toString().toLowerCase().includes(searchVal.toLowerCase()))

   setMapped(searchTermResult)

}

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
     setCurrentPage(value);
     const startIndex = (value-1) * perPage
     const endIndex = startIndex +perPage
      // setMapped(data.slice(startIndex,endIndex))
      setMapped(data.filter(job=> job.locationRestrictions[0]=== inputValue).slice(startIndex,endIndex))

  };

    return(
    <div>
        <Search onChange={(e)=>setSearchVal(e.target.value)} onClick ={(e)=>handleSearch(e,searchVal)}/>
        <MainForm onChange ={(e)=>handleInputChange(e)} onSubmit={(e)=>e.preventDefault()}/>

        {

        loading ? 'loading' : mapped.map((item ,index)=><Card key={index} {...item}/>)
       }
        <Paginator pagesize={pageSize} currentPage={currentPage} onChange = {handlePageChange}  />
    </div>
    )
}


export default Container
