import React, {Component} from 'react';

class Heading extends Component {
  render() {
    let txt = this.props.txt;
    return (
      <h1>{txt}</h1>
    );
  }
};

Heading.propTypes = {
  txt: React.PropTypes.string,
};

Heading.defaultProps ={
  txt: 'Hello World!'
};

export default Heading;
