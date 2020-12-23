import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components"
import Dash from "../Dash"
import WReport from "../WReport"
import Header from "./Header"



const Routes = () =>(
    <Router>
        <Header/>
        <Switch>
        <Route exact path="/" component={Dash}/>
        <Route  path="/report" component={WReport}/>
        </Switch>
       
    </Router>
)

export default Routes