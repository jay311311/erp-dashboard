import React, { useState } from "react"
import WReportPresent from "./WReportPresent"
//import {DataSet} from "../Component/DataSet"
import axios from "axios"

const  WReportContainer = () =>{
    const [loading, setLoading] = useState(false)
    const [register, SetRegister] =useState(false)
    const [modify, SetModify] =useState(false)
    const [targetId, setTargetId] = useState(Number)
    const [regi, setRegi] = useState({
        brand:'',
        name:'',
        message:'',
        stock:''
    }) 
    const [tableListData,settableListData] = useState({
        brand:'',
        name:'',
        message:'',
        stock:'',
        plus:'',
        minus:'',
        now:''
    })
   

    

/*     const {data:{stock_box:stockBock}} = DataSet */


    const RegiClick = (event) =>{
        console.log(event)
        if(event.target.innerHTML === "Register" || event.target.className === "close"){
            SetRegister(!register)
          
        }else{
            SetModify(!modify)

        }
    }

    const RegisterSubmit = (event) =>{
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

    const handleClick=(event)=>{
        const {target:{parentElement:{cells}}} = event
        console.log(event.target.parentElement.cells)
        console.log(event.target.parentElement.id)
        setTargetId(event.target.parentElement.id)
       
    
      
            SetModify(!modify)

           console.log("here", cells, event.target.parentElement.id)
            settableListData({
                id:event.target.parentElement.id,
                brand:cells[1].innerHTML,
                name:cells[2].innerHTML,
                message:cells[0].innerHTML,
                stock:cells[3].innerHTML,
                plus:cells[4].innerHTML,
                minus:cells[5].innerHTML,
                now:cells[6].innerHTML,
            }) 
        }
    

        return(
            <WReportPresent  
                RegisterSubmit={RegisterSubmit}
                handleChange={handleChange} 
                handleClick={handleClick}
                RegiClick={RegiClick}
                register={register}
                modify={modify}
                tableListData={tableListData}
             
            />
        )
    
}


export default WReportContainer

