import React, {Component} from 'react';
import CSS from './Pachuca.css';
import {Link} from 'react-router-dom';
import Blanca from './Blanca.jpg';
import Manzanillo from './Manzanillo.jpg';
import Madero from './Madero.jpg';
import Lunch from './Lunch.jpg';
import Escamoles from './Escamoles.jpg';
import NRaro from './NRaro.jpg';
import Pastes from './Pastes.jpg';
import HidVd from './HidVd.mp4';
import Oficio from './Oficio.jpg'
import Caldillo from './Caldillo.jpg'
class Pachuca extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
   
    Restaurante =(Codigo)=>{
        switch (Codigo) {
            case 1:
            window.open("http://www.maderorestaurantcafe.com/")
                break;
            case 2:
            window.open("http://www.restaurantelablanca.com/")
            
            break;
            case 3:
            window.open("http://vinculo.business.site/")
            
            break;
            case 4:
            window.open("http://www.garufa.com.mx/")
            
            break;
            case 5:
            window.open("http://www.maderorestaurantcafe.com/")
            
                break;
        
          
        }
       


    }
    render() {
        return (
            <div className="container-fluid"id="gaus">
            <div className="ColorT">
                 <div className="text-center">
                     <hr/>
                     <h1>Pachuca</h1>
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
                                                <li className="dropdown">
                                                <a href="#" className="dropdown-toggle Color aE" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Gastronomia <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#Rara1">Comida Tipica</a></li>
                                                    <li><a href="#Restaurantes">Restaurantes</a></li>
                                                </ul>
                                                
                                                </li>
                                                <li className="dropdown">
                                                <a href="#" className="dropdown-toggle Color" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Historia <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="http://siglo.inafed.gob.mx/enciclopedia/EMM10Pachuca/historia.html">Historia</a></li>
                                                </ul>
                                                </li>
                                            </ul>
                                    
                                            </div>
                                           
                                        </div>
                                        </nav>
  <br/>
        <video  width="100%" height="340" controls>
        <source src={HidVd} type="video/mp4"/>
        </video> 
  <br/>       
  <br/>       

        <div className="CC">
 
  <br/>
            <h1 className="text-center">¿Comó es la comida de Pachuca?</h1>
<p id="Comida">La comida hidalguense es variada y abundante; destaca su gran cantidad de tamales entre los que encontramos en la zona huasteca, el zacahuil y el xohol, realizados a base de masa de maíz, envueltos en hoja de plátano y cocidos en hornos de leña.</p>
  <br/>
  </div>
  <h2>Platillos típicos </h2>
 <div className="Platillos">
  <div className="Rara1" id="Rara1">
  <div className="div text-center">
 
  <div class="dropdown form-group col-xs-4 col-sm-4 col-md-4 col-lg-4 es " >
  <div class="dropbtn">Caldillo duranguense</div>
  <div class="dropdown-content">
<img src={Caldillo} className="" id="Imagen" /> 
  
  <p><i>Los Pastes es uno de los antojitos más famosos de Hidalgo, son una especie de empanada rellena de papa que se hornea y se ha ido modificando el relleno hasta crear deliciosas combinaciones. Es un pan (en ocasiones hojaldrado) relleno con papa y carne, de acuerdo con la receta tradicional, aunque también los hay rellenos de pollo, carne, piña, mole, atún con papa, etc. El paste es sin duda uno de los platillos típicos de Pachuca y Real del Monte.</i></p>
  </div>
</div>

<div class="dropdown form-group col-xs-4 col-sm-4 col-md-4 col-lg-4 es ">

<div class="dropbtn " >Zacahuil</div>
  <div class="dropdown-content">
<img src={NRaro} className="" id="Imagen" /> 
  
  <p><i>El zacahuil es un tamal de gran tamaño, puede ser de un metro o más, es elaborado en ocasiones especiales como las fiestas, el carnaval o para el magnífico Xantolo, dicho platillo se elabora a base de masa seca (algo mortajada), chile ancho, chile guajillo, chile pasilla, cebolla asada, ajo, manteca, polvo para hornear y guajolote, el cual se envuelve en hojas de plátano y su cocción se lleva a cabo en un tradicional horno de piedra.</i></p>
  </div>
</div>

  <div class="dropdown form-group col-xs-4 col-sm-4 col-md-4 col-lg-4 es" >

<div class="dropbtn" >Escamoles</div>
  <div class="dropdown-content">
<img src={Escamoles} className="" id="Imagen" /> 
  
  <p><i>Los Escamoles son la larva o hueva de la hormiga escamolera; en la actualidad se le considera un platillo de alta cocina por esa razón se le ha dado el nombre de “El Caviar Mexicano”;</i></p>
  </div>
  </div>
</div>



</div>
</div>
            <div>
            <hr className="hr1 form-group col-xs-12 col-sm-12 col-md-12 col-lg-12"/>
                <h1 className="text-center form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">Restaurantes</h1>
                <p className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">Durango tiene suficientes Restaurantes para tenerte ocupado un buen tiempo, a conticuacion te ponemos los mejores Restaurantes, ¡Anda pasa y date un buen festin! </p>
                <div id="Restaurantes">
                <table class="table table-bordered ">
                    <thead>
                    <tr>
                        <th className="text-center">Nombre</th>
                        <th className="text-center">Direccion</th>
                        <th className="text-center">Telefono</th>
                        <th className="text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr href="" className="trC" onClick={()=> this.Restaurante(1)}>
                        <td>Madero Restaurante</td>
                        <td>Blvrd Nuevo Hidalgo 33, Villas de Pachuca, 42083 Pachuca de Soto, Hgo. </td>
                        <td>01 771 478 2000</td>
                        <td className="text-center"> <img src={Madero} className="" /> </td>
                     </tr>
                     <tr href="" className="trC" onClick={()=>this.Restaurante(2)}>
                        <td>Restaurante La Blanca</td>
                        <td>Calle Mariano Matamoros 201, Centro, 42000 Pachuca de Soto, Hgo.</td>
                        <td>01 771 715 1896</td>
                        <td className="text-center"> <img src={Blanca} className="" /> </td>
                     </tr>
                     <tr href="" className="trC" >
                        <td>Restaurante El Manzanillo</td>
                        <td>Calle Vicente Guerrero 504, Centro, 42000 Pachuca de Soto, Hgo.</td>
                        <td> 01 771 100 8179</td>
                        <td className="text-center"> <img src={Manzanillo} className="" /> </td>
                     </tr>
                     <tr href="" className="trC" >
                        <td>Tu Lunch</td>
                        <td>Carr. Federal Pachuca - Mexico Km. 83, San Antonio, 42083 Pachuca de Soto, Hgo.</td>
                        <td>01 618 811 7748</td>
                        <td className="text-center"> <img src={Lunch} className="" /> </td>
                     </tr>
                     <tr href="" className="trC" onClick={()=>this.Restaurante(5)}>
                        <td>Sotero Cocina de Oficio</td>
                        <td>Blvrd Nuevo Hidalgo 33, Villas de Pachuca, 42083 Pachuca de Soto, Hgo.</td>
                        <td>  01 771 478 2000</td>
                        <td className="text-center"> <img src={Oficio} className="" /> </td>
                     </tr> 
                     </tbody>
                </table>


                </div>
                </div>
                </div>
        );
    }
}

export default Pachuca;

