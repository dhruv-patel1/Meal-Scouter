import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import PlaceModal from "../components/PlaceModal";

const AppRouter = () =>(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/places" component={PlaceModal}/>
        </Switch>
    </BrowserRouter>
);


export default AppRouter;