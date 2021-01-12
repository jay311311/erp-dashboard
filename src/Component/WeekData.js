import axios from "axios"
import React,{useState} from "react"
import styled from "styled-components"
import Calendar from ".././Component/Calender"


const ModifyModal= styled.div`
 position:absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%); 
background: #fff;
width:55%;
height:55%;
border-radius:4px;
`

const ModalContainer = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
height:100%;
`
const InputField = styled.div`
  position:relative;
  width:100%;
  left:-50px;
  display:flex;
  justify-content: space-around;
`
const Form = styled.form`
width:70%
`

const Input = styled.input`
width: 100%;
  padding: 8px 0;
  font-size: 18px;
  color: #636e72;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #bdc3c7;
  outline: none;
  background: transparent;
 &::placeholder{
     color:#636e72
 }
`
const Lable = styled.label`
 width:100%;
  padding: 10px 0;
  font-size: 18px;
  color:#636e72;
  padding-right:10px;
  pointer-events: none;
  text-align:right;
  display:block;
`
const Button = styled.button`
background: none;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  color: #636e72;
  display: block;
  font-size: 18px;
  padding:4px 25px;
  position: relative;
  left:45%;
  transition: .3s ease-in-out;
  &:hover{
    background: #bdc3c7;
    color:white;
    font-weight:bold;
  }
` 

const WeekData = ({tableListData:TableList, RegiClick}) =>{
    const [revise, setRevise] =useState(false)
    const [TableData, setTableData] = useState({
        brand:TableList.brand,
        name:TableList.name,
        message:TableList.message,
        stock:TableList.stock,
        inventory_plus:"",
        inventory_minus:""
    })
    

    const handleClick = (event) =>{
        event.preventDefault();
        setRevise(!revise);
    }
    

    const handleChange = (event) =>{
        const NewData={
            ...TableData,
            [event.target.name] : event.target.value

        }
        setTableData(NewData)
        console.log(NewData)
    }

    const handleSumbit = (event) =>{
        event.preventDefault();
        console.log(event.target.name);
        setRevise(!revise);
        const {target:{name}}=event
        const {target:{brand}}=event
        const {target:{stock}}=event
        const {target:{message}}=event
        const {target:{inventory_plus}}=event
        const {target:{inventory_minus}}=event


        const newName = name.value
        const newBrand = brand.value
        const newStock = Number(stock.value)
        const newMessage = message.value
        const newPlus = inventory_plus.value
        const newMinus = inventory_minus.value



        /* axios.put("/register/",{
                inventory_plus:
                inventory_minus:
                initial_inventory: newStock,
                
              }).then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })  */
    }

  return(
    <ModifyModal>
    <span style={{position:"absolute", top:"5%", left:"95%",fontSize:"1.4rem" , color: "#636e72"}} onClick={RegiClick}>x</span>
        <ModalContainer>    
        <div style={{width:"80%", marginTop:"20px"}}>
        
            {revise ? (  
              <div style={{display:"flex", justifyContent:"center"}}>
               <Calendar/>
            <Form method="get" onSubmit={handleSumbit}>
                <InputField> <Lable>브랜드 : </Lable><Input placeholder={TableList.brand} onChange={handleChange} name= "brand" /></InputField>
                <InputField> <Lable>제품명 : </Lable> <Input placeholder={TableList.name} onChange={handleChange} name= "name" /></InputField>
                <InputField> <Lable>전달사항 : </Lable> <Input placeholder={TableList.message ? TableList.message: "-" } onChange={handleChange} name="message"/></InputField>
                <InputField> <Lable>지난재고 : </Lable><Input placeholder={TableList.stock} onChange={handleChange} name= "stock" /></InputField>
                <InputField> <Lable>입고 : </Lable> <Input onChange={handleChange} name= "inventory_plus" /></InputField>
                <InputField> <Lable>출고 : </Lable> <Input onChange={handleChange} name= "inventory_minus" /></InputField>
                
                <Button type="">완료</Button>
            </Form>
            </div>
) :(
    <>
        <div>
        <div>{new Date().toDateString()}</div>
       
                <div><span>브랜드  : </span><span>{TableList.brand}</span></div>
                <div><span>제품명 : </span><span>{TableList.name}</span></div>
                <div><span>전달사항 : </span><span>{TableList.message ? TableList.message: "-"  }</span></div>
                <div><span>지난재고 : </span><span>{TableList.stock}</span></div>
                <div><span>입고 : </span><span>{}</span></div>
                <div><span>출고 : </span><span>{}</span></div>
                <div><span>현재재고 : </span><span>{}</span></div>
                <button type="button" onClick={handleClick}>수정</button> 
                </div>
    </>
)}
</div>
        </ModalContainer>
    </ModifyModal>
  )
}


export default WeekData