import React, { Component } from "react";

class Child extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="">
        <h1>Child!</h1>
        <h2>My name is: {this.props.name} </h2>
        <h3>{this.props.num}</h3>
        <button onClick={this.props.add}>Increase</button>
      </div>
    );
  }
}

export default Child;
