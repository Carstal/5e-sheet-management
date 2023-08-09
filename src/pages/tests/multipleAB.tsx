import React, { Component, ChangeEvent } from "react";

// Component A
interface ComponentAProps {
  values: number[];
  updateValue: (index: number, newValue: number) => void;
}

const ComponentA: React.FC<ComponentAProps> = ({ values, updateValue }) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = parseInt(event.target.value, 10);
    updateValue(index, newValue);
  };

  return (
    <div>
      <h2>Component A</h2>
      {values.map((value, index) => (
        <div key={index}>
          <input
            type="number"
            value={value}
            onChange={(e) => handleChange(e, index)}
          />
          <p>
            Value {index + 1}: {value}
          </p>
        </div>
      ))}
    </div>
  );
};

// Component B
interface ComponentBProps {
  values: number[];
  addFive: (index: number, amount: number) => void;
}

interface ComponentBState {
  amount: number;
}

class ComponentB extends Component<ComponentBProps, ComponentBState> {
  constructor(props: ComponentBProps) {
    super(props);
    this.state = {
      amount: 5
    };
  }

  handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ amount: parseInt(event.target.value, 10) });
  };

  render() {
    const { values, addFive } = this.props;
    const { amount } = this.state;

    return (
      <div>
        <h2>Component B</h2>
        <input
          type="number"
          value={amount}
          onChange={this.handleAmountChange}
        />
        {values.map((value, index) => (
          <div key={index}>
            <p>
              Value {index + 1}: {value}{" "}
              <input type="checkbox" onChange={() => addFive(index, amount)} />
            </p>
          </div>
        ))}
      </div>
    );
  }
}

// Parent Component
interface ParentComponentState {
  sharedValues: number[];
}

class ParentComponent extends Component<{}, ParentComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      sharedValues: [0, 0, 0, 0, 0] // Initial shared values
    };
  }

  updateSharedValue = (index: number, newValue: number) => {
    const updatedValues = [...this.state.sharedValues];
    updatedValues[index] = newValue;
    this.setState({ sharedValues: updatedValues });
  };

  addAmountToValue = (index: number, amount: number) => {
    const updatedValues = [...this.state.sharedValues];
    updatedValues[index] += amount;
    this.setState({ sharedValues: updatedValues });
  };

  render() {
    const { sharedValues } = this.state;

    return (
      <div>
        <ComponentA
          values={sharedValues}
          updateValue={this.updateSharedValue}
        />
        <ComponentB values={sharedValues} addFive={this.addAmountToValue} />
      </div>
    );
  }
}

export default ParentComponent;
