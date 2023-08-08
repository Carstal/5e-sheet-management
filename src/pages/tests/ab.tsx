import React, { Component } from "react";

// Component A
const ComponentA = ({ value, updateValue }) => {
  const handleChange = (event) => {
    updateValue(event.target.value);
  };

  return (
    <div>
      <h2>Component A</h2>
      <input type="number" value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </div>
  );
};

// Component B
const ComponentB = ({ value }) => {
  return (
    <div>
      <h2>Component B</h2>
      <p>Value: {value}</p>
    </div>
  );
};

// Parent Component
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sharedValue: 0
    };
  }

  updateSharedValue = (newValue) => {
    this.setState({ sharedValue: newValue });
  };

  render() {
    const { sharedValue } = this.state;

    return (
      <div>
        <ComponentA value={sharedValue} updateValue={this.updateSharedValue} />
        <ComponentB value={sharedValue} />
      </div>
    );
  }
}

export default ParentComponent;
