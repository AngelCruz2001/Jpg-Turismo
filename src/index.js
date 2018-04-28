import React from 'react';
import {render} from 'react-dom';
import AppRoutes from './Routes'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';


render (<Router>
    <AppRoutes/>
    </Router>,
     document.getElementById('root'));
registerServiceWorker();
  