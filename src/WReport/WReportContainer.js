import React, { useState } from "react"
import WReportPresent from "./WReportPresent"
import {DataSet} from "../Component/DataSet"

const  WReportContainer = () =>{
    const [loading, setLoading] = useState(false)
    const [RegiName,setResiName] = useState("")

    const {data:{stock_box:stockBock}} = DataSet
    const {data:{stock_box:{week}}} = DataSet

    const RegiSubmit = (event) =>{
        event.preventDefault();
        console.log("aa")
       /*  setRName({RegiName})
        setRStock({RegiStock})
        setRMessage({Regimessage})  */
         if(RegiName !== "" ){
            console.log("제품명",RegiName)
           /*  console.log("재고",RStock)
            console.log("메세지",RMessage) */
        } 
    } 
     const handleChange = (event) =>{
        const {target:{value}} = event;
        console.log(value)
        setResiName({value})
    } 


  /*   const RegisterClick = (event) =>{
        event.preventDefault()
        SetRegister(!Register)
    }
    const ModifyClick = (event) =>{
        event.preventDefault()
        SetModify(!Modify)
    } */

    stockBock.map(stock=>{console.log(stock)})
        return(
            <WReportPresent  
                stockBock={stockBock} 
                week={week}
                RegiName={RegiName}
                /* RegiStock={RegiStock} 
                Regimessage={Regimessage} */
                RegiSubmit={RegiSubmit}
                 handleChange={handleChange} 
            />
        )
    
}


export default WReportContainer

