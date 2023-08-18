import { useData } from "./useData"


const filters =(loc,e)=>{
    const[data]= useData()
    const newData = data.filter(job=>{
       return job.locationRestrictions[0] === e.target.value
    })
    return newData
}
