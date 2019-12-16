import React from 'react';

export default class Welcome2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }


render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

}
