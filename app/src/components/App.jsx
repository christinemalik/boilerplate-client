import React, {Component} from 'react';
import Heading from './Heading.jsx';
import StateUpdate from './StateUpdate.jsx';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Heading txt='Hello React World!!'/>
        <StateUpdate />
      </div>
    );
  }
}

export default App;
