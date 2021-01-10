import React, { useState } from "react"
import styled from "styled-components"
import WeekData from "../Component/WeekData"

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
margin: 5px  0% 5px 92%
`
const TableHeader = styled.th`
width:10%;
padding:5px 0
`
const TableBody = styled.td`
padding:5px 0;
`

const RegisterModal= styled.div`
/* position:absolute;
top:30%; */
background: blue;
width:80%;
height:30%
`
const ModalContainer = styled.form`

display:flex;
align-items: center;
justify-content:center;
`

const WReportPresent =({stockBock,week,  handleChange, RegiSubmit,RegiClick,register,modify }) =>{



    return(
        <ContainerBox>
            <Container>
                <Title>Weekly Report</Title>
                    <Register onClick={RegiClick}>Register</Register>
                    <table style={{width:`100%`,textAlign:"center", border:"1px solid black"}}>
                    <thead style={{width:`100%`}}>
                        <tr>
                            <TableHeader>재고 현황</TableHeader>
                            <TableHeader>브랜드</TableHeader>
                            <TableHeader style={{width:`30%`}}>제품 명</TableHeader>
                            <TableHeader>기존 재고</TableHeader>
                            <TableHeader>입고/출고</TableHeader>
                            <TableHeader>현재재고</TableHeader>
                            <TableHeader>누락건수</TableHeader>
                            <TableHeader>수정</TableHeader>
                        </tr>
                    </thead>
                    {stockBock && stockBock.map(stock=> (
                    <tbody>
                        <tr key={Math.random()}>
                            <TableBody >{stock.stock_state}</TableBody>
                            <TableBody >{stock.brand}</TableBody>
                            <TableBody >{stock.product_name}</TableBody>
                            <TableBody >{stock.weekly_stock_past}</TableBody>
                            <TableBody >{`${stock.weekly_stock_minus} / ${stock.weekly_stock_plus}`}</TableBody>
                            <TableBody >{stock.weekly_stock_now}</TableBody>
                            <TableBody >{stock.weekly_stock_past - stock.weekly_stock_now }</TableBody>
                            <TableBody onClick={RegiClick}>✒</TableBody>
                        </tr>
                    </tbody>
                        ))
                    }
                    </table>
                    {register ?( 
                    <RegisterModal>
                        <ModalContainer method="get" onSubmit={RegiSubmit} >
                            <div>
                            <label>브랜드명</label>
                            <input onChange={handleChange} name="brand"></input> 
                            </div>
                            <div>
                            <label>제품명</label>
                            <input  onChange={handleChange} name="name"></input>
                            </div>
                            <div>
                            <label>초기재고 </label>
                            <input  onChange={handleChange} name="stock"/>
                            </div>
                            <div>
                                <label>전달사항</label>
                                <input  onChange={handleChange} name="message"/>
                            </div>
                            <button type="submit"  >등록</button>
                        </ModalContainer>
                    </RegisterModal> ): null}
           
                    {modify ?(
                     <WeekData week={week}></WeekData>
                            ) :null}    
                   
            </Container>
        </ContainerBox>
)
}

export default WReportPresent