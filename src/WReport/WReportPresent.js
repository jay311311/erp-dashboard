import React, { useState } from "react"
import styled from "styled-components"

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
const Register = styled.button`
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
const ModifyModal= styled.div`
/* position:absolute;
top:0; */
background: yellow;
width:80%;
height:30%
`
const RegisterModal= styled.div`
/* position:absolute;
top:30%; */
background: blue;
width:80%;
height:30%
`
const ModalContainer = styled.div`

display:flex;
justify-contents:center;
align-items: center
`

const WReportPresent =({stockBock,week}) =>{
 const [register, SetRegister] =useState(false)
 const [modify, SetModify] =useState(false)

    return(
        <ContainerBox>
            <Container>
                <Title>Weekly Report</Title>
                    <Register onClick={()=>SetRegister(!register)}>Register</Register>
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
                            <TableBody >0</TableBody>
                            <TableBody onClick={()=>SetModify(!modify)}>✒</TableBody>
                        </tr>
                    </tbody>
                        ))
                    }
                    </table>
                    {register ?( <ModifyModal>
                    <ModalContainer>
                        <div>
                            <span>브랜드명</span> 
                            <select>
                                <option value="나이비">나이비</option>
                                <option value="루미레브">루미레브</option>
                                <option value="마지마켓">마지마켓</option>
                                <option value="말랑하니">말랑하니</option>
                                <option value="모우모우">모우모우</option>
                                <option value="아이블린">아이블린</option>
                                <option value="본분">본분</option>
                                <option value="카키블린">카키블린</option>
                            </select>
                        </div>
                        <div><span>제품명</span><input value></input></div>
                        <div><span>초기재고 </span><input value></input></div>
                        <div><span>전달사항</span><input value></input></div>
                        <button>확인</button>
                        </ModalContainer>
                        </ModifyModal> ): null}
           
                    {modify ?(
                    <RegisterModal>
                        <ModalContainer>
                
                            </ModalContainer>
                    </RegisterModal>
                            ) :null}    
                   
            </Container>
        </ContainerBox>
)
}

export default WReportPresent