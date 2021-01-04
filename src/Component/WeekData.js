import React from "react"
import styled from "styled-components"

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
const WeekData = ({week}) =>(
    
    <ModifyModal>
        <ModalContainer>

        </ModalContainer>
    </ModifyModal>
    
)

export default WeekData