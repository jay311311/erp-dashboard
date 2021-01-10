import React,{useState} from "react"
import styled from "styled-components"
import Calendar from ".././Component/Calender"


const ModifyModal= styled.form`
/* position:absolute;
top:0; */
background: yellow;
width:80%;
height:30%
`

const ModalContainer = styled.div`
display:flex;
align-items: center;
justify-content:center;
`

const Form = styled.form`
`
const WeekData = ({TList}) =>{



    const handleChange = (event) =>{
        const NewCount = {
            
            [event.target.name]:event.target.value
        }
       
        console.log(NewCount)
    }

    const handleSumbit = (event) =>{
        event.preventDefault();
        console.log(event)
    }

  return(
    <ModifyModal>
        <ModalContainer>    
        <Calendar/>
            <div>
            { TList.plus == "-" && TList.minus == "-" ? (
                <>
                <Form method="get" >
                <div><span>브랜드  : </span><span>{TList.brand}</span></div>
            <div><span>제품명 : </span><span>{TList.name}</span></div>
            <div><span>전달사항 : </span><span>{TList.message ? TList.message: "-" }</span></div>
            <div><span>지난재고 : </span><span>{TList.stock}</span></div>
            <div><span>입고 : </span> <input onChange={handleChange} name="plus"/> </div>
            <div><span>출고 : </span> <input onChange={handleChange} name="minus"/> </div>
            <div><span>현재재고 : </span><span>{TList.now}</span></div>
            <input type="submit" onClick={handleSumbit}/>
            </Form>
            </>
            ) :
            (
                <>
                <div><span>브랜드  : </span><span>{TList.brand}</span></div>
            <div><span>제품명 : </span><span>{TList.name}</span></div>
            <div><span>전달사항 : </span><span>{TList.message ? TList.message: "-" }</span></div>
            <div><span>지난재고 : </span><span>{TList.stock}</span></div>
            <div><span>입고 : </span><span>{TList.plus}</span></div>
            <div><span>출고 : </span><span>{TList.minus}</span></div>
           
            <div><span>현재재고 : </span><span>{TList.now}</span></div>
            
            </>
            ) }
            
           
            </div>
        </ModalContainer>
    </ModifyModal>
  )
}


export default WeekData