import React, {Component} from 'react';
import CSS from './Demo2.css';
import CS2S from './Demo.css';
var $ = require ('jquery');


class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

 
  render() {
    return (
      <div class="gaus">
      <div class="interno">
      Soy un mensaje informativo el cual se sobrepone delante de un contenedor borroso.</div>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut odio. Nam sed est. Nam a risus et est iaculis adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer ut justo. In tincidunt viverra nisl. Donec dictum malesuada magna. Curabitur id nibh auctor tellus adipiscing pharetra. Fusce vel justo non orci semper feugiat. Cras eu leo at purus ultrices tristique.
      
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</div>
    );
  }
}

export default Demo;