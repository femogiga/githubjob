

import { useData } from "../utility/useData"
import Card from "./homepage/Card"
import MainForm from "./homepage/MainForm"
import Paginator from "./homepage/Paginator"
import Search from "./homepage/Search"
import { useEffect, useState} from "react"

const  Container = ()=>{

   const[currentPage,setCurrentPage]=useState<number>(1)
   const[data,loading,error] = useData(currentPage)





    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);

  };

    return(
    <div>
        <Search/>
        <MainForm/>

        {

            data.map((item ,index)=><Card key={index} {...item}/>)
       }
        <Paginator currentPage={currentPage} onChange = {handlePageChange}/>
    </div>
    )
}


export default Container
