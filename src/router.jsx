import React from "react";
import { Switch, Route } from "react-router-dom";

import Tables from "./pages/table";
import Forms from "./pages/forms"
const Router = () => {
    return (
        <Switch>
            
            <Route path="/table">
                <Tables />
            </Route>
            <Route path="/forms">
                <Forms />
            </Route>
        </Switch>
    )
}
export default Router;
