import React from "react"
import styled from "styled-components"

const Container = styled.div`
margin:80px;
display:flex;
`
const Title = styled.div`
font-size:2.8rem;
font-weight : bold;
color:#636e72;

`
const WReportPresent =({stockBock,week}) =>{


    return(
        <Container>
            <div>
                <Title>Weekly Report</Title>
                {stockBock && stockBock.length >0 && stockBock.map(stock=>
                    <table>
                        <tr>
                            <th>

                            </th>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>
                                
                            </td>
                        </tr>
                    </table>
                    )}
            </div>
        </Container>
)
}

export default WReportPresent