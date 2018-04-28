import React, {Component} from 'react';
import CSS from './Durango.css';
import CSS2 from './Museos.css';
import {Link} from 'react-router-dom';
import Tunel from './Tunel.jpg';
import Francisco from './Francisco.jpg'; 
import Bebeleche from './Bebeleche.jpg'; 
import Arte from './Arte.jpg'; 



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
                <h1 className="text-center">Tunel de mineria </h1>
                <div className="form-group col-xs-4 col-sm-4 col-md-4 col-lg-4">
                     <img src={Tunel} className="Imagenes1" id="Imagenes1" /> 
                    </div>
                </div>
                <div className="form-group col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <p>Ideado para mostrar los vestigios de cuatro siglos de minería en Durango; el túnel cuenta con dos accesos, uno en la Placita Juan Pablo II en el Arzobispado y otro en la Plaza de Armas, a un costado de la calle Juárez.
Recorrerás de manera subterránea (10 mts de profundidad), 280 metros donde podrás ir descubriendo máquinas, herramientas y minerales que fueron donadas por las compañías mineras de la región.
Mapas y fichas técnicas complementan la información.</p> 
                    <h4>Horario:</h4>
                                <h5>Domingo:   10:00hrs-21:30hrs</h5>
                                <h5>Lunes:     Cerrado</h5>
                                <h5>Martes:    10:00hrs-21:30hrs</h5>
                                <h5>Miercoles: 10:00hrs-21:30hrs</h5>
                                <h5>Jueves:    10:00hrs-21:30hrs</h5>
                                <h5>Viernes:   10:00hrs-21:30hrs</h5> 
                                <h5>Sabado:    10:00hrs-21:30hrs</h5>
            </div>
            <div >
                <h1 className="text-center">Bebeleche</h1>
                <div className="form-group col-xs-4 col-sm-4 col-md-4 col-lg-4">
                     <img src={Bebeleche} className="Imagenes1" id="Imagenes1" /> 
                    </div>
                </div>
                <div className="form-group col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <p>De la manera más divertida, a través de experiencias educativas e interactivas para pequeños y grandes, aquí se aprende de ciencia, arte y sobre el Estado de Durango. Lo componen cinco salas temáticas: Conocer, Vivir, Jugar, Crecer y Crear, en las que existen un sin fín de juegos educativos que nadie quiere perderse.</p> 
                    <h4>Horario:</h4>
                                <h5>Domingo:   11:00hrs-19:00hrs</h5>
                                <h5>Lunes:     Cerrado</h5>
                                <h5>Martes:    9:00hrs-17:00hrs</h5>
                                <h5>Miercoles: 9:00hrs-17:00hrs</h5>
                                <h5>Jueves:    9:00hrs-17:00hrs</h5>
                                <h5>Viernes:   9:00hrs-17:00hrs</h5> 
                                <h5>Sabado:    11:00hrs-19:00hrs</h5>
            </div>
            <div >
                <h1 className="text-center">Museo de Francisco Villa </h1>
                <div className="form-group col-xs-4 col-sm-4 col-md-4 col-lg-4">
                     <img src={Francisco} className="Imagenes1" id="Imagenes1" /> 
                    </div>
                </div>
                <div className="form-group col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <p>Está ubicado en un inmueble conocido como la Hacienda de la Santísima Trinidad, cuya construcción data de mediados del siglo XIX. Abrió sus puertas como museo en septiembre de 1994.</p> 
                    <h4>Horario:</h4>
                                <h5>Domingo:   10:00hrs-18:00hrs</h5>
                                <h5>Lunes:     Cerrado</h5>
                                <h5>Martes:    11:00hrs-18:00hrs</h5>
                                <h5>Miercoles: 10:00hrs-18:00hrs</h5>
                                <h5>Jueves:    10:00hrs-18:00hrs</h5>
                                <h5>Viernes:   10:00hrs-18:00hrs</h5> 
                                <h5>Sabado:    10:00hrs-18:00hrs</h5>
            </div>
            <div className="" >
                <h1 className="text-center">Arte Sacro </h1>
                <div className="form-group col-xs-4 col-sm-4 col-md-4 col-lg-4">
                     <img src={Arte} className="Imagenes1" id="Imagenes1" /> 
                    </div>
                </div>
                <div className="form-group col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <p>Un verdadero tesoro de arte y devoción descubrirá en la Galería Episcopal de la Catedral.

                    Cerca de 500 piezas de los siglos XVII y XVIII distribuidas en ocho salas; su acervo incluye medio centenar de óleos, esculturas, muebles litúrgicos, libros corales y piezas religiosas exclusivas que lo sitúan como uno de los mejores museos de su tipo en el norte del país.</p> 
                    <h4>Horario:</h4>
                                <h5>Domingo:   10:00hrs-14:00hrs</h5>
                                <h5>Lunes:     Cerrado</h5>
                                <h5>Martes:    10:00hrs-13:00hrs : 16:00hrs-19:00hrs</h5>
                                <h5>Miercoles: 10:00hrs-13:00hrs : 16:00hrs-19:00hrs</h5>
                                <h5>Jueves:    10:00hrs-13:00hrs : 16:00hrs-19:00hrs</h5>
                                <h5>Viernes:   10:00hrs-13:00hrs : 16:00hrs-19:00hrs</h5> 
                                <h5>Sabado:    10:00hrs-14:00hrs</h5>
            </div>

                </div>
                </div>
        );
    }
}

export default Museos;
