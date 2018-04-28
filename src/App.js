import React, { Component } from 'react';
import Portada from './Portada/Portada.js'
import Aguascalientes from './Aguascalientes/Aguascalientes.js';
import Index from './global';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes={
    children:PropTypes.object.isRequired
  }
  render() {
    const {children}=this.props;
    return (
      <div className='App'>
      <Index body={children}/>
       </div>
    );
  } 
}
export default App;