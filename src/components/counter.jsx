import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value != this.props.counter.value) {
      //Get new data from server
    }
  }

  componentWillUnmount() {
    console.log("Counter unmount");
    //In this case, when a counter is deleted, it's component will unmount from the DOM
    //Clean up code is implemented here, such as stopping timers...
  }

  render() {
    console.log("Counter rendered");
    return (
      <React.Fragment>
        <h4>Counter {this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Del
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 btn-sm badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h5>zero</h5> : value;
  }

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tags => (
  //           <li key={tags.id}>{tags.name}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
}

export default Counter;
