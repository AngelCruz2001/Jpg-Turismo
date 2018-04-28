import React, {Component} from 'react';
import CSS from './Portada.css';
import Dgo from './Dg.png';
import Gua from './Gu.png'; 
import Agu from './Ag.png';
import Zac from './Za.png';
import Hid from './Hi.png';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class Portada extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    HidClick =()=>{
        this.props.history.push('Pachuca');
    }
    AguasClick =()=>{
        this.props.history.push('Aguascalientes');
    }
    DgoClick =()=>{
        this.props.history.push('Durango');
    }
    static propTypes={
       title:PropTypes.string.isRequired,
       item: PropTypes.array.isRequired
      } 
    render() {
        const {body} =this.props;
        return (
       <div className="container-fluid">
       <div className="Titulo">
            <div className="container-fluid text-center">
                <hr/>
                <h1>Jpg-Turismo</h1>
                <hr/>
                </div>
                </div>
               


<div>
  <nav className="navbar ">
    <a className="navbar-brand Nombre" >JPG</a>
  </nav>
</div>
<br/>
<br/>
        <div className="container-fluid">
          
                <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <img src={Dgo} className="Imagenes" onClick={this.DgoClick.bind()} />

                </div>
           
            
            

                <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
            
                <img src={Agu} className="Imagenes" onClick={this.AguasClick.bind()} />
            </div>
            
            <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <img src={Hid} className="Imagenes" onClick={this.HidClick.bind()}/>
            </div>
            </div>
            
            </div>
            
       
        ); 
    }
}

export default Portada;