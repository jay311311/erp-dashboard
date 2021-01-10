import React, { useState } from "react"
import WReportPresent from "./WReportPresent"
import {DataSet} from "../Component/DataSet"
import axios from "axios"

const  WReportContainer = () =>{
    const [loading, setLoading] = useState(false)
    const [register, SetRegister] =useState(false)
    const [modify, SetModify] =useState(false)
    const [regi, setRegi] = useState({
        brand:'',
        name:'',
        message:'',
        stock:''
    }) 
   

    

    const {data:{stock_box:stockBock}} = DataSet
    const {data:{stock_box:{week}}} = DataSet

    const RegiClick = (event) =>{
        if(event.target.innerHTML === "Register"){
            SetRegister(!register)
        }else{
            SetModify(!modify)
        }
        
       

    }

    const RegiSubmit = (event) =>{
        event.preventDefault();
        const {target:{name}}=event
        const {target:{brand}}=event
        const {target:{stock}}=event
        const {target:{message}}=event
         if(name.value || brand.value || stock.value || message.value){
            const newName = name.value
            const newBrand = brand.value
            const newStock = Number(stock.value)
            const newMessage = message.value

    
            axios.post("/register/",{
                brand_name : newBrand ,
                product_name: newName,
                initial_inventory: newStock,
                remark: newMessage
              }).then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })

              console.log(newName, newBrand, newStock, newMessage )


        } 
        
      
        event.target.reset()
        SetRegister(!register)
        
    } 

 
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
                RegiClick={RegiClick}
                register={register}
                modify={modify}
            />
        )
    
}


export default WReportContainer

