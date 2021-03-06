import React from 'react';
import {  Route } from 'react-router-dom'
import MangereCharge from "./manager_recharge";
import ManagerDetails from "./manager_details";
import ManagerDetailsRg from "./manager_details_rg";
import MangerList from "./manager_list";
import ManagerBalance from "./manager_balance";
import ManagerRepsd from "./manage_repsd";
const userRoutes = ({ match }) => (
    <div>
        <Route exact path={`${match.url}/`} component={MangerList} />
        <Route exact path={`${match.url}/mangerecharge`} component={MangereCharge} />
    </div>
);


export default userRoutes;