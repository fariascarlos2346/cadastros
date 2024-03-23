import React from "react";
import { BrowserRouter as Router, Swith, Route } from "react-router-dom";

import Home from "./containers/Home"
import Users from "/containers/Users"

function Routes(){

   return(
      <Router>
         <Swith>
            <Route exact path="/" component={Home}/>
            <Route exact patg="/usuarios" component={Users}/>
         </Swith>
      </Router>
   )
}

export default Routes