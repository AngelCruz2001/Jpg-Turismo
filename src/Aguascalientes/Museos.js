import React, {Component} from 'react';
import CSS from './Aguascalientes.css';
import CSS2 from './Museos.css';
import {Link} from 'react-router-dom';
import MuseoP from './MuseoP.jpg';
import Jose from './Jose.jpg'; 
import Ferrocaril from './Ferrocaril.jpg'; 
import Regional from './Regional.jpg'; 



class Museos extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid"id="gaus">
            <div className="ColorT">
                 <div className="text-center">
                     <hr/>
                     <h1>Aguascalientes</h1>
                     <hr/>
                     </div>
                     </div>
                     <nav className="navbar navbar-default">
                                        <div className="container-fluid">

                                            <div className="navbar-header">
                                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                            <a className="navbar-brand Color aE" ><Link to="/">JPG</Link></a>
                                            </div>
                     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                            <ul className="nav navbar-nav">
                                                <li ><a className="Color aE" > <Link to="/Aguascalientes">Aguascalientes</Link> <span className="sr-only">(current)</span></a></li>
                                                
                                           
                                        </ul>
                                        </div>
                                        </div>
                                        </nav>
                                        <hr/>
                                        <hr/>
                                        <div>
            <div >
                <h1 className="text-center">Museo de Aguascalientes </h1>
                <div className="form-group col-xs-4 col-sm-4 col-md-4 col-lg-4">
                     <img src={MuseoP} className="Imagenes1" id="Imagenes1" /> 
                    </div>
                </div>
                <div className="form-group col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <p>El Museo de Aguascalientes, es el museo del Estado de Aguascalientes que alberga la obra de artistas oriundos de la entidad.</p> 
                    <h4>Horario:</h4>
                                <h5>Domingo:   11:00hrs-18:00hrs</h5>
                                <h5>Lunes:     Cerrado</h5>
                                <h5>Martes:    11:00hrs-18:00hrs</h5>
                                <h5>Miercoles: 11:00hrs-18:00hrs</h5>
                                <h5>Jueves:    11:00hrs-18:00hrs</h5>
                                <h5>Viernes:   11:00hrs-18:00hrs</h5> 
                                <h5>Sabado:    11:00hrs-18:00hrs</h5>
            </div>
            <div >
                <h1 className="text-center">Museo Jose Guadalupe</h1>
                <div className="form-group col-xs-4 col-sm-4 col-md-4 col-lg-4">
                     <img src={Jose} className="Imagenes1" id="Imagenes1" /> 
                    </div>
                </div>
                <div className="form-group col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <p>El Museo José Guadalupe Posada es un espacio para la investigación, promoción y difusión de la gráfica.</p> 
                    <h4>Horario:</h4>
                                <h5>Domingo:   11:00hrs-18:00hrs</h5>
                                <h5>Lunes:     Cerrado</h5>
                                <h5>Martes:    11:00hrs-18:00hrs</h5>
                                <h5>Miercoles: 11:00hrs-18:00hrs</h5>
                                <h5>Jueves:    11:00hrs-18:00hrs</h5>
                                <h5>Viernes:   11:00hrs-18:00hrs</h5> 
                                <h5>Sabado:    11:00hrs-18:00hrs</h5>
            </div>
            <div >
                <h1 className="text-center">Museo de Regional de aguascalientes </h1>
                <div className="form-group col-xs-4 col-sm-4 col-md-4 col-lg-4">
                     <img src={Regional} className="Imagenes1" id="Imagenes1" /> 
                    </div>
                </div>
                <div className="form-group col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <p>El Museo Regional de Historia de Aguascalientes es un recinto museográfico de Aguascalientes, Aguascalientes. Trata la historia del actual estado desde la prehistoria hasta la época actual.</p> 
                    <h4>Horario:</h4>
                                <h5>Domingo:   9:00hrs-18:00hrs</h5>
                                <h5>Lunes:     Cerrado</h5>
                                <h5>Martes:    9:00hrs-18:00hrs</h5>
                                <h5>Miercoles: 9:00hrs-18:00hrs</h5>
                                <h5>Jueves:    9:00hrs-18:00hrs</h5>
                                <h5>Viernes:   9:00hrs-18:00hrs</h5> 
                                <h5>Sabado:    9:00hrs-18:00hrs</h5>
            </div>
            <div className="" >
                <h1 className="text-center">Museo Ferrocarrilero de Aguascalientes </h1>
                <div className="form-group col-xs-4 col-sm-4 col-md-4 col-lg-4">
                     <img src={Ferrocaril} className="Imagenes1" id="Imagenes1" /> 
                    </div>
                </div>
                <div className="form-group col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <p>El Museo Ferrocarrilero de Aguascalientes es un recinto museográfico de la ciudad de Aguascalientes.</p> 
                    <h4>Horario:</h4>
                                <h5>Domingo:   11:00hrs-18:00hrs</h5>
                                <h5>Lunes:     Cerrado</h5>
                                <h5>Martes:    11:00hrs-18:00hrs</h5>
                                <h5>Miercoles: 11:00hrs-18:00hrs</h5>
                                <h5>Jueves:    11:00hrs-18:00hrs</h5>
                                <h5>Viernes:   11:00hrs-18:00hrs</h5> 
                                <h5>Sabado:    11:00hrs-18:00hrs</h5>
            </div>

                </div>
                </div>
        );
    }
}

export default Museos;
