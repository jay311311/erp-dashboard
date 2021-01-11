import React, { useState } from "react"
import styled from "styled-components"
import WeekData from "../Component/WeekData"
import TableSection from "../Component/TableSection"


const ContainerBox = styled.div`
margin:60px;
display:flex;
width:100vw
`
const Container = styled.div`
width:100%
`

const Title = styled.div`
font-size:2.8rem;
font-weight : bold;
color:#636e72;
margin:20px 0;
`
const Register = styled.div`
width:6%;
margin: 5px  0% 5px 92%;
border-radius:4px;
/* border: 0.5px solid #4172F4; */
box-shadow: 0px 1px 2px 2px #dcdde1;
text-align:center;
padding:8px 0;
transition:.3s ease-in-out;


`


const RegisterModal= styled.div`
 position:absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%); 
background: #4172F4;
width:40%;
height:50%;
border-radius:4px;

`
const ModalContainer = styled.form`
width:100%;
display:flex;
align-items:center;
justify-content:center;
height:100%;

`

const InputField = styled.div`
  position: relative;
  left:60px
`
const Input = styled.input`
width: 100%;
  padding: 10px 0;
  font-size: 20px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;

`
const Lable = styled.label`
position: absolute;
  top:0;
  left: -100px;
  padding: 10px 0;
  font-size: 20px;
  color: #fff;
  pointer-events: none;
`
const Button = styled.button`
background: none;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  display: block;
  font-size: 18px;
  padding:4px 25px;
  margin-top:20px;
  position: relative;
  left:50%;
  transition: .3s ease-in-out;
  &:hover{
    background: #fff;
    color:#4172f3;
    font-weight:bold;
  }
` 

const WReportPresent =({stockBock,  handleChange, RegiSubmit,RegiClick,register,modify, handleClick,TList }) =>{

    console.log(TList)
    return(
        <ContainerBox>
            <Container>
                <Title>Weekly Report</Title>
                    <Register onClick={RegiClick}>Register</Register>
                    <TableSection stockBock={stockBock} RegiClick={RegiClick} handleClick={handleClick}/>
                    {register ?( 
                    <RegisterModal>
                    <span className="close" style={{position:"absolute", top:"5%", left:"95%",fontSize:"1.4rem" , color: "white"}} onClick = {RegiClick}>x</span>
                        <ModalContainer method="post" onSubmit={RegiSubmit} >
                            <div>
                            <InputField>
                                <Lable>브랜드명</Lable>
                                <Input onChange={handleChange} name="brand"/> 
                            </InputField>
                            <InputField>
                                <Lable>제품명</Lable>
                                <Input  onChange={handleChange} name="name"/>
                            </InputField>
                            <InputField>
                                <Lable>초기재고 </Lable>
                                <Input  onChange={handleChange} name="stock"/>
                            </InputField>
                            <InputField>
                                <Lable>전달사항</Lable>
                                <Input  onChange={handleChange} name="message"/>
                            </InputField>
                            <Button type="submit"  >등록</Button>
                            </div>
                            
                        </ModalContainer>
                    </RegisterModal> ): null}
           
                    {modify ?(
                     <WeekData TList={TList} RegiClick={RegiClick}></WeekData>
                            ) :null}    
                   
            </Container>
        </ContainerBox>
)
}

export default WReportPresent