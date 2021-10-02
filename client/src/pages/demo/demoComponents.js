import React, { Component } from 'react';
import '../../css/App.css';

import Manatee from '../../components/Manatee/Manatee';
import Whale from '../../components/Whale/Whale';
import Narwhal from '../../components/Narwhal/Narwhal';


class DemoComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Description: ''
      }
    }

    render () {
        return (
            <div className='Demo'>      
              <div className="wrapper">
                <h1>Marine Mammals</h1>
                <Manatee />
                <Narwhal />
                <Whale />
              </div>
     
            </div>
        );
    }

}

export default DemoComponent;
  