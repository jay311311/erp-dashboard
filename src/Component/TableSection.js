import React,{useState,useEffect} from "react";
import {ApiData} from "../api"
import styled from "styled-components";
import { render } from "@testing-library/react";
import axios from "axios";

/* 
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
 */

const THeader = styled.th`
width:10%;
padding:5px 0;
border-bottom: 1px solid rgba(224, 224, 224, 1);
padding:18px;
`
const TBody = styled.td`
padding:5px 0;
border-bottom: 1px solid rgba(224, 224, 224, 1);
padding:18px;
`
const Delete = styled.button`
width:60px;
line-height:30px;
background-color:red;
`

/* function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]; */

const TableSection = ({RegiClick,handleClick }) => {
  const [api,setApi] = useState(null);
  useEffect(
    ()=>{
      ApiData.then(data => setApi(data.data))
    },[ApiData]
  )

  console.log(api)

  const DelClick = (event) =>{
    event.preventDefault()
    console.log(event.target.id)
    const Id= event.target.id
/*     axios.delete( `/show/?id=${Id}`, res)
      .then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(e)
      }) */
  }

return(
  <>

  <div>table</div>
    <table style={{width:`100%`,textAlign:"center", borderRadius:"4px", boxShadow : "0 3px 3px 3px rgba(224, 224, 224, 1)"}}>
                    <thead style={{width:`100%`}}>
                        <tr key={Math.random()}>
                        
                            <THeader>재고 현황</THeader>
                            <THeader>브랜드</THeader>
                            <THeader style={{width:`20%`}}>제품 명</THeader>
                            <THeader>기존 재고</THeader>
                            <THeader>입고</THeader>
                            <THeader>출고</THeader>
                            <THeader>현재재고</THeader>
                            <THeader>수정</THeader>
                            <THeader>삭제</THeader>
                        </tr>
                    </thead>
                    {api && api.map(stock=> (
                    <tbody key={Math.random()}>
                        <tr id={stock.id} >
                           
                            <TBody align="right">{stock.remark}</TBody>
                            <TBody align="right">{stock.brand_name}</TBody>
                            <TBody align="right">{stock.product_name}</TBody>
                            <TBody align="right">{stock.initial_inventory}</TBody>
                            <TBody align="right">{stock.plus ? stock.plus: "-"}</TBody>
                            <TBody align="right">{stock.minus ? stock.minus :"-" }</TBody>
                            <TBody align="right">{stock.initial_inventory - stock.minus + stock.plus ? stock.initial_inventory - stock.minus + stock.plus :"-" }</TBody>
                            <TBody onClick={handleClick} /* onClick={RegiClick} */>✒</TBody>
                            <TBody onClick = {DelClick} id={stock.id}> 🗑</TBody>
                        </tr>
                    </tbody>
                        ))
                    }
                    </table> 
                    </>
)
                  
}


export default TableSection;