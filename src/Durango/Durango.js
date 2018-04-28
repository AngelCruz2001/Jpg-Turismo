import React, {Component} from 'react';
import CSS from './Durango.css';
import {Link} from 'react-router-dom';
import Chona from './Chona.jpg';
import Esquilon from './Esquilon.jpg';
import Finca from './Finca.jpg';
import Gabino from './Gabino.jpg';
import Zocabon from './Zocabon.jpg';
import Enchiladas from './Enchiladas.jpg';
import Caldillo from './Caldillo.jpg';
import Nuez from './Nuez.jpg';
import DgoVd from './DgoVd.mp4';
class Durango extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
   
    Restaurante =(Codigo)=>{
        switch (Codigo) {
            case 1:
            window.open("https://www.facebook.com/RESTAURANT-ZOCABON-208774289133814/")
                break;
            case 2:
            window.open("http://www.esquilon.com.mx/")
            
            break;
            case 3:
            window.open("http://vinculo.business.site/")
            
            break;
            case 4:
            window.open("http://www.garufa.com.mx/")
            
            break;
            case 5:
            window.open("https://restaurantlaestacion.com/sitio/")
            
                break;
        
          
        }
       


    }
    render() {
        return (
            <div className="container-fluid"id="gaus">
            <div className="ColorT">
                 <div className="text-center">
                     <hr/>
                     <h1>Durango</h1>
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
                                                     <li><a href="#"><Link to="/MuseosD">Museos</Link></a></li>
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
                                                    <li><a href="http://siglo.inafed.gob.mx/enciclopedia/EMM10durango/historia.html">Historia</a></li>
                                                </ul>
                                                </li>
                                            </ul>
                                    
                                            </div>
                                           
                                        </div>
                                        </nav>
  <br/>
        <video  width="100%" height="340" controls>
        <source src={DgoVd} type="video/mp4"/>
        </video> 
  <br/>       
  <br/>       

        <div className="CC">
 
  <br/>
            <h1 className="text-center">¿Comó es la comida de Durango?</h1>
<p id="Comida">Durango, al noroeste del país, es la tierra desértica que ha sido cuna de mitos, leyendas y una fascinación gigantesca. Eso se refleja en la gastronomía duranguense, siendo una tradición culinaria mestiza que combina lo prehispánico con lo español. Por ello, a continuación te presentamos algunos ejemplos de la comida típica de Durango.</p>
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
  
  <p><i>Hay que empezar con el platillo más representativo de la comida típica de <b>Durango</b>. También conocido como caldillo de machaca, se elabora con carne seca, cebolla, ajo, chile poblano asado, chile colorado, jitomates, y especias.</i></p>
  </div>
</div>

<div class="dropdown form-group col-xs-4 col-sm-4 col-md-4 col-lg-4 es ">

<div class="dropbtn " >Enchiladas duranguenses</div>
  <div class="dropdown-content">
<img src={Enchiladas} className="" id="Imagen" /> 
  
  <p><i>Como varias enchiladas de México, se comienza friendo la tortilla en manteca. La diferencia está en la salsa que se utiliza para bañarlas. En la comida típica de Durango, éstas se remojan en salsa de cacahuate y almendra o de leche, así como huevo, chiles mulato y ancho. Queso rallado y lechuga terminan de preparar el platillo.</i></p>
  </div>
</div>

  <div class="dropdown form-group col-xs-4 col-sm-4 col-md-4 col-lg-4 es" >

<div class="dropbtn" >Dulces de Nuez</div>
  <div class="dropdown-content">
<img src={Nuez} className="" id="Imagen" /> 
  
  <p><i>Al ser este estado uno de los principales productores nacionales de nuez, no sorprende que deriven <b>postres</b> de esta semilla. La nuez es preparada hasta convertirla en una pasta seca, que se pinta y moldea para darle distintas figuras.</i></p>
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
                        <td>El Zocabón</td>
                        <td>Avenida 5 de Febrero 513 Poniente, Zona Centro, 34000 Durango, Dgo. </td>
                        <td>01 618 811 8083</td>
                        <td className="text-center"> <img src={Zocabon} className="" /> </td>
                     </tr>
                     <tr href="" className="trC" onClick={()=>this.Restaurante(2)}>
                        <td>Esquilón</td>
                        <td>Hidalgo 411, Zona Centro, 34000 Durango, Dgo..</td>
                        <td>01 618 811 1632</td>
                        <td className="text-center"> <img src={Esquilon} className="" /> </td>
                     </tr>
                     <tr href="" className="trC" >
                        <td>Gorditas Gabino</td>
                        <td>Calle Constitución s/n, Zona Centro, 34000 Durango, Dgo.</td>
                        <td> 01 618 813 0121</td>
                        <td className="text-center"> <img src={Gabino} className="" /> </td>
                     </tr>
                     <tr href="" className="trC" onClick={()=>this.Restaurante(4)}>
                        <td>La Fonda de la Tía Chona</td>
                        <td>Calle Nogal 110, Barrio del Calvario, 34000 Durango, Dgo.</td>
                        <td>01 618 811 7748</td>
                        <td className="text-center"> <img src={Chona} className="" /> </td>
                     </tr>
                     <tr href="" className="trC" onClick={()=>this.Restaurante(5)}>
                        <td>Finca Damiana</td>
                        <td>Calle Dolores del Río 101, Predio Canoas, 34077 Durango, Dgo.</td>
                        <td> 01 618 811 5981</td>
                        <td className="text-center"> <img src={Finca} className="" /> </td>
                     </tr>
                     </tbody>
                </table>


                </div>
                </div>
                </div>
        );
    }
}

export default Durango;

