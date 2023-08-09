import React, { Component, ChangeEvent } from "react";

interface A {
  value: number;
  updateValue: (newValue: number) => void;
}

// Component A
const ComponentA: React.FC<A> = ({ value, updateValue }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    updateValue(newValue);
  };

  return (
    <div>
      <h2>Component A</h2>
      <input type="number" value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </div>
  );
};

interface B {
  value: number;
}

// Component B
const ComponentB: React.FC<B> = ({ value }) => {
  return (
    <div>
      <h2>Component B</h2>
      <p>Value: {value}</p>
    </div>
  );
};

interface Parent {
  sharedValue: number;
}

// Parent Component
class ParentComponent extends Component<{}, Parent> {
  constructor(props: {}) {
    super(props);
    this.state = {
      sharedValue: 0
    };
  }

  updateSharedValue = (newValue: number) => {
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
