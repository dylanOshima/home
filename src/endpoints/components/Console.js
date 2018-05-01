import React, { Component } from 'react';
//import Typed from 'typed.js';

class Console extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    }
  }

  componentDidMount() {
    console.log("Console > componentDidMount()")

  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;

    // this.el refers to the <span> in the render() method
    this.props.updateText("#console", strings);
  }

  componentWillUnmount() {
    console.log("Console > componentWillUnmount()")

  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.props.typed.destroy();
  }

  render() {
    console.log("Console > render()")

    return (
      <div className="Console wrap">
        <div className="type-wrap">
          <span
            style={{ whiteSpace: 'pre' }}
            // ref={(el) => { this.el = el; }}
            id="console"
          />
        </div>
      </div>
    );
  }
}

export default Console;
