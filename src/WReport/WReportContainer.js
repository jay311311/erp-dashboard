import React, { useState } from "react"
import WReportPresent from "./WReportPresent"
import {DataSet} from "../Component/DataSet"

const  WReportContainer = () =>{
    const [loading, setLoading] = useState(false)
    const [Reginame, setReginame] = useState("")
    const [Regibrand, setRegibrand] = useState("")
    const [Regimessage , setRegimessage] = useState("")
    const [RegiStock , setRegiStock] = useState("")
    const [regi, setRegi] = useState({
        brand:'',
        name:'',
        message:'',
        stock:''
    }) 
   

    

    const {data:{stock_box:stockBock}} = DataSet
    const {data:{stock_box:{week}}} = DataSet

    const RegiSubmit = (event) =>{
        event.preventDefault();
        const {target:{name}}=event
        const {target:{brand}}=event
        const {target:{stock}}=event
        const {target:{message}}=event
         if(name.value || brand.value || stock.value || message.value){
            const newName = name.value
            const newBrand = brand.value
            const newStock = stock.value
            const newMessage = message.value

            setRegibrand(newBrand)
            setReginame(newName)
            setRegiStock(newStock)
            setRegimessage(newMessage)
        } 
        console.log(Reginame,Regibrand,Regimessage,RegiStock )
        
        
        
    } 

    const {brand,name, stock, message} = regi
     const handleChange = (event) =>{
        const newRegi = {
            ...regi,
            [event.target.name]:event.target.value
        }
        setRegi(newRegi)
        console.log(regi)
    } 




        return(
            <WReportPresent  
                stockBock={stockBock} 
                week={week}
                RegiSubmit={RegiSubmit}
                handleChange={handleChange} 
               
            />
        )
    
}


export default WReportContainer

