import React, { useState } from "react"
import styled from "styled-components"
import WeekData from "../Component/WeekData"
import TableSection from "../Component/TableSection"
import Register from "../Component/Register"

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
const RegisterBtn = styled.div`
width:6%;
margin: 5px  0% 5px 92%;
border-radius:4px;
/* border: 0.5px solid #4172F4; */
box-shadow: 0px 1px 2px 2px #dcdde1;
text-align:center;
padding:8px 0;
transition:.3s ease-in-out;


`
const BlackContainer = styled.div`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
background-color: rgba(0,0,0,0.7);
`




const WReportPresent =({ stockBock, handleChange, RegisterSubmit,RegiClick,register,modify, handleClick,tableListData,targetId }) =>{

    return(
        <ContainerBox>
            <Container>
                <Title>Weekly Report</Title>
                    <RegisterBtn onClick={RegiClick}>Register</RegisterBtn>
                    <TableSection/*  stockBock={stockBock} */ RegiClick={RegiClick} handleClick={handleClick}/>
                    {register ?( 
                  <BlackContainer>
                        <Register handleChange={handleChange} RegisterSubmit={RegisterSubmit} RegiClick={RegiClick}/>
                    </BlackContainer>
                    ): null}
           
                    {modify ?(
                      <BlackContainer>
                     <WeekData tableListData={tableListData} RegiClick={RegiClick}/>
                     </BlackContainer>
                            ) :null}    
                   
            </Container>
        </ContainerBox>
)
}

export default WReportPresent