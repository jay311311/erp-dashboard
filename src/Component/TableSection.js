import React from "react";
import axios from "axios";
import styled from "styled-components";

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

const TableSection = ({stockBock,RegiClick,handleClick }) =>{

  

/* const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
  const classes = useStyles();
 */
  
  
  
       
        /*   axios.get("/show/")
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });  
       */
      

return(
  <>
  {/* <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
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
                        </tr>
                    </thead>
                    {stockBock && stockBock.map(stock=> (
                    <tbody key={stock.id}>
                        <tr id={stock.id} onClick={handleClick}>
                            <TBody align="right">{stock.remark}</TBody>
                            <TBody align="right">{stock.brand_name}</TBody>
                            <TBody align="right">{stock.product_name}</TBody>
                            <TBody align="right">{stock.initial_inventory}</TBody>
                            <TBody align="right">{stock.plus ? stock.plus: "-"}</TBody>
                            <TBody align="right">{stock.minus ? stock.minus :"-" }</TBody>
                            <TBody align="right">{stock.initial_inventory - stock.minus + stock.plus ? stock.initial_inventory - stock.minus + stock.plus :"-" }</TBody>
                            <TBody onClick={RegiClick}>✒</TBody>
                        </tr>
                    </tbody>
                        ))
                    }
                    </table> 
                    </>
)
}


export default TableSection;