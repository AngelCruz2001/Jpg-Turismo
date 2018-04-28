
import React, {Component} from 'react';
import PropTypes from 'prop-types';




class Portada extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
     
    }
    static propTypes={
        body:PropTypes.object.isRequired
      } 
    render() {
        const {body} =this.props;
        return (
       <div className="container-fluid">
      {body}
            
            </div>
            
       
        ); 
    }
}

export default Portada;