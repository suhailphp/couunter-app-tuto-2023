import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    id:this.props.id
  };
  render() {
    return (
      <div>
        {this.props.children}
        <span style={{ fontSize: 20 }} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={()=>this.props.onDelete(this.state.id)} className="btn btn-sm btn-danger m-2">Delete</button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClass() {
    const { value } = this.state;
    let className = "badge m-2 bg-";
    return value === 0 ? className + "warning" : className + "primary";
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
