import React from "react"
import styled from "styled-components"
import Routes from "./Component/Routes"

const NavFlex = styled.div`
display:flex
`
function App() {
  return (
    <NavFlex>
      <Routes/>
    </NavFlex>
  );
}

export default App;
