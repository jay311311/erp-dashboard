import axios from "axios"
import React,{useState} from "react"
import styled from "styled-components"
import Calendar from ".././Component/Calender"


const ModifyModal= styled.div`
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
const WeekData = ({TList, RegiClick}) =>{
    const [revise, setRevise] =useState(false)
    const [ListName, setListName] = useState(TList.name)
    const [ListBrand, setListBrand] = useState(TList.brand)
    const [ListMessage, setListMessage] = useState(TList.message)
    const [ListStock, setListStock] = useState(TList.stock)
    const [ListPlus, setListPlus] = useState(TList.plus)
    const [ListMinus, setListMinus] = useState(TList.minus)
    const [ListNow, setListNow] = useState(TList.now)
    

    const handleClick = (event) =>{
        event.preventDefault();
        setRevise(!revise);
    }
    

    const handleChange = (event) =>{
        
       
        console.log(event)
    }

    const handleSumbit = (event) =>{
        event.preventDefault();
        console.log(event);
        setRevise(!revise);

      /*   axios.put("/register/",{

        }) */
    }

  return(
    <ModifyModal>
    <span onClick={RegiClick}>x</span>
        <ModalContainer>    
        <Calendar/>
            {revise ? (  
            <Form method="get" onSubmit={handleSumbit}>
                <div> <label>브랜드  : <input value={ListBrand} onChange={handleChange}/></label></div>
                <div> <label>제품명 : <input value={ListName} onChange={handleChange}/></label></div>
                <div> <label>전달사항 : <input value={ListMessage ? ListMessage: "-" } onChange={handleChange}/></label></div>
                <div> <label>지난재고 : <input value={ListStock} onChange={handleChange}/></label></div>
                <div> <label>입고 : <input value={ListPlus} onChange={handleChange}/></label></div>
                <div> <label>출고 : <input value={ListMinus} onChange={handleChange}/></label></div>
                <div> <label>현재재고 : <input value={ListNow} onChange={handleChange}/></label></div>
                <button type="">완료</button>
            </Form>
) :(
    <>
        <div>
                <div><span>브랜드  : </span><span>{ListBrand}</span></div>
                <div><span>제품명 : </span><span>{ListName}</span></div>
                <div><span>전달사항 : </span><span>{ListMessage ? ListMessage: "-" }</span></div>
                <div><span>지난재고 : </span><span>{ListStock}</span></div>
                <div><span>입고 : </span><span>{ListPlus}</span></div>
                <div><span>출고 : </span><span>{ListMinus}</span></div>
                <div><span>현재재고 : </span><span>{ListNow}</span></div>
                <button type="button" onClick={handleClick}>수정</button> 
                </div>
    </>
)}

        </ModalContainer>
    </ModifyModal>
  )
}


export default WeekData