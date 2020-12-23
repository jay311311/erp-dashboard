import React, { useState } from "react"
import WReportPresent from "./WReportPresent"
import {DataSet} from "../Component/DataSet"

const  WReportContainer = () =>{
    const [loading, setLoading] = useState(false)

    const {data:{stock_box:stockBock}} = DataSet
    const {data:{stock_box:{week}}} = DataSet

    stockBock.map(stock=>{console.log(stock)})
        return(
            <WReportPresent  stockBock={stockBock} week={week}/>
        )
    
}


export default WReportContainer

