import React, {Component} from 'react';
import AgVid from './AgVid.mp4';
import CSS from './Aguascalientes.css';
import {Link} from 'react-router-dom';
import Lola from './Lola.jpg';
import Estacion from './Estacion.jpg';
import Garufa from './Garufa.jpg';
import Saturnina from './Saturnina.jpg';
import Vinculo from './Vinculo.jpg';
import Pozole from './Pozole.png';
import Menudo from './Menudo.jpg';
import Bolillo from './Bolillo.jpg';
class Aguascalientes extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
   
    Restaurante =(Codigo)=>{
        switch (Codigo) {
            case 1:
            window.open("https://www.facebook.com/MiLolaAguascalientes/")
                break;
            case 2:
            window.open("http://lasaturnina.com/")
            
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
                                                <li className="dropdown">
                                                <a href="#" className="dropdown-toggle Color aE" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Gastronomia <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#Rara1">Comida Tipica</a></li>
                                                    <li><a href="#Restaurantes">Restaurantes</a></li>
                                                </ul>
                                                </li>
                                                    <li><a href="#"><Link to="/MuseosD">Museos</Link></a></li>
                                                <li className="dropdown">
                                                <a href="#" className="dropdown-toggle Color" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Historia <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="http://www.aguascalientes.gob.mx/vivaags/UI/Historia.aspx">Historia</a></li>
                                                </ul>
                                                </li>
                                            </ul>
                                    
                                            </div>
                                           
                                        </div>
                                        </nav>
  <br/>
        <video  width="100%" height="340" controls>
        <source src={AgVid} type="video/mp4"/>
        </video> 
  <br/>       
  <br/>       

        <div className="CC">
 
  <br/>
            <h1 className="text-center">¿Comó es la comida de Aguascalientes?</h1>
<p id="Comida">Basada en distintos tipos de carnes, la gastronomía de Aguascalientes no solo es increíblemente deliciosa, sino que ofrece una gran variedad de exquisitos platillos a todos los visitantes.

El pozole, birria de barbacoa de carnero, menudo, lechón al horno, entre otras delicias, son las que podemos degustar en esta hermosa ciudad. Consienta a su paladar al saborear los tradicionales dulces que están hechos a base de piloncillo o los deliciosos ates de membrillo, entre muchas delicias más.

Además de contar con comida típica de la región, usted puede probar variados platillos de origen tanto nacional como internacional.</p>
  <br/>
  </div>
  <h2>Platillos típicos </h2>
 <div className="Platillos">
  <div className="Rara1" id="Rara1">
  <div className="div text-center">
 
  <div class="dropdown form-group col-xs-4 col-sm-4 col-md-4 col-lg-4 es " >
  <div class="dropbtn">Pozole de lengua al estilo Aguascalientes</div>
  <div class="dropdown-content">
<img src={Pozole} className="" id="Imagen" /> 
  
  <p><i>Existe una variedad del pozole llamada estilo Aguascalientes.   Hay blanco y rojo. El blanco se prepara con maíz tierno, el rojo con chile. Lo que caracteriza a este <mark>pozole</mark> es el llevar lengua de res. Su presentación lleva de un lado del plato lengua de res y del otro maciza de cerdo, que ambas fueron hervidas en ollas aparta con media cebolla. La consistencia de su caldo es un poco viscosa, parece como un atole muy ligero. Como todo pozole es un caldo con maíz (de tipo cacahuazintle) y además lleva una cabeza de ajo, chile ancho desvenado y sal al gusto. Suele acompañarse con lechuga, rábano, cebolla picada, orégano, limón, chiles en vinagre y tostadas.</i></p>
  </div>
</div>

<div class="dropdown form-group col-xs-4 col-sm-4 col-md-4 col-lg-4 es ">

<div class="dropbtn " >Menudo</div>
  <div class="dropdown-content">
<img src={Menudo} className="" id="Imagen" /> 
  
  <p><i>El tradicional “menudo” o “pancita” es el platillo por excelencia para reponerse de una resaca o cruda.

Generalmente se prepara los sábados y los domingos pero se puede encontrar en establecimientos que lo preparan diariamente.

Es un caldo preparado con panza de res y chiles secos, acompañado de cebolla, cilantro, orégano, salsa y tortillas recién hechas a mano.

Puedes pedir “pata”, “libro” o “panza” y una quesadilla de cuajo.</i></p>
  </div>
</div>

  <div class="dropdown form-group col-xs-4 col-sm-4 col-md-4 col-lg-4 es" >

<div class="dropbtn" >Bolillo</div>
  <div class="dropdown-content">
<img src={Bolillo} className="" id="Imagen" /> 
  
  <p><i>Este es quizá el antojito más representativo de los hidrocálidos y lo encuentras prácticamente en cada “tiendita de la esquina”. Tradicionalmente se prepara con crema, jamón y un chile jalapeño, sin embargo en las loncherías o triciclos que recorren la ciudad puedes rellenarlo también de guisados como chicharrón, lengua o carnitas.

El bolillo de Aguascalientes, a diferencia del resto del país, se “forja” en pares, que al dividirlo queda un pan que se puede rellenar con cualquier guisado o comida. Otra de sus características es su costra crujiente y su peso que permite contener los alimentos por más tiempo.

No puedes decir que has estado en Aguascalientes si no lo has probado. ¡Cómelo a cualquier hora del día!</i></p>
  </div>
  </div>
</div>



</div>
</div>
            <div>
            <hr className="hr1 form-group col-xs-12 col-sm-12 col-md-12 col-lg-12"/>
                <h1 className="text-center form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">Restaurantes</h1>
                <p className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">Como ya bien se expuso la comida de Aguascalientes esta entre las mejores del pais. Aguascalientes cuanta con una gran coleccion de Restaurantes para decidir, a continuacion te ponemos los mejores Restaurantes, ¡Anda pasa y date un buen festin! </p>
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
                        <td>Mi Lola Aguascalientes</td>
                        <td>Blvd. Luis Donaldo Colosio Murrieta 513, Jardines de la Concepción II, 20120 Aguascalientes, Ags. </td>
                        <td>01 449 281 3570</td>
                        <td className="text-center"> <img src={Lola} className="" /> </td>
                     </tr>
                     <tr href="" className="trC" onClick={()=>this.Restaurante(2)}>
                        <td>La Saturnina</td>
                        <td>Venustiano Carranza 110, Zona Centro, 20000 Aguascalientes, Ags.</td>
                        <td>01 449 994 0449</td>
                        <td className="text-center"> <img src={Saturnina} className="" /> </td>
                     </tr>
                     <tr href="" className="trC" onClick={()=>this.Restaurante(3)}>
                        <td>Vinculo Aguascalientes</td>
                        <td>Av. Aguascalientes Pte. 2617, La España, 20205 Aguascalientes, Ags. </td>
                        <td>01 449 281 3570</td>
                        <td className="text-center"> <img src={Vinculo} className="" /> </td>
                     </tr>
                     <tr href="" className="trC" onClick={()=>this.Restaurante(4)}>
                        <td>Garufa Aguascalientes</td>
                        <td>Av Aguascalientes Nte 408, Bosques del Prado Nte., 20127  </td>
                        <td>01 449 914 9147</td>
                        <td className="text-center"> <img src={Garufa} className="" /> </td>
                     </tr>
                     <tr href="" className="trC" onClick={()=>this.Restaurante(5)}>
                        <td>La Estación</td>
                        <td>Calle 28 de Agosto No.210, Barrio de La Estacion, 20259 Aguascalientes, Ags. </td>
                        <td>01 449 918 6664</td>
                        <td className="text-center"> <img src={Estacion} className="" /> </td>
                     </tr>
                     </tbody>
                </table>


                </div>
                </div>
                </div>
        );
    }
}

export default Aguascalientes;

