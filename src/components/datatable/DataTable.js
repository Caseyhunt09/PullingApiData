import React from "react";
import PropTypes from "prop-types";

export default class DataTable extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'First Name',
      lastName: 'Last Name',
      age: 'Age',
      gender: 'M/F'
    };
  }

  handleClick   = () => {
    this.props.clickHandler(this.props.name);
  }


  render() {

    return (
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          <tr>
            <td>{this.state.firstName}</td>
            <td>{this.state.lastName}</td>
            <td>{this.state.age}</td>
            <td>{this.state.gender}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
