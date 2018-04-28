import React from 'react';
import {Route,Switch} from 'react-router-dom';
import App from './App.js'
import Portada from './Portada/Portada.js'
import Aguascalientes from './Aguascalientes/Aguascalientes.js';
import MuseosA from './Aguascalientes/Museos.js';
import MuseosD from './Durango/Museos.js';
import Demo from './Demo/Demo.js';
import Trabajadores from './Trabajadores.js';
import Durango from './Durango/Durango.js';
import Pachuca from './Pachuca/Pachuca.js'
const AppRoutes = () =>
<App> 
    <Switch>
        <Route exact path="/Aguascalientes" component={Aguascalientes}/>
        <Route path="/Demo" component={Demo}/>
        <Route path="/Trabajadores" component={Trabajadores}/>
        <Route path="/MuseosD" component={MuseosD}/>
        <Route path="/MuseosA" component={MuseosA}/>
        <Route path="/Durango" component={Durango}/>
        <Route path="/Pachuca" component={Pachuca}/>
        <Route path="/" component={Portada}/>
        </Switch>
    </App>;

    export default AppRoutes;
 