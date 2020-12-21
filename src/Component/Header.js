import React from "react"
import {Link} from "react-router-dom" 
import styled from "styled-components"
import home from "./Images/home.png"
import chart from "./Images/chart.png"


const Links = styled(Link)`
text-decoration :none;
display : inline-block;
width:100%
`
const Nav = styled.div`
background-color: #4172F4;
width:80px;
height:100vh;
border-radius:0 10px 10px 0;
padding-top:20px;
`
const Icon = styled.img`
width: 35px;
padding:20px;
`

 const Header =  ()=>(
    <Nav>
        <Links to="/">
            <Icon src={home}/>
        </Links>
        <Links to ="/report">
            <Icon src={chart}/>
        </Links>
    </Nav>
 )

export default Header