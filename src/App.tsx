import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";
import Number from "./Number";
import { Form, Input } from "./Input";

interface IState {
  counter: number;
  name: string;
}

class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: ""
  };

  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input name={name} onChange={this.onChange} />
        </Form>
        <Number count={counter} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    console.log(value);
    this.setState({
      name: value
    })
  }

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { name } = this.state;
    console.log(`Search: ${name}`);
  }

  add = () => {
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      }
    })
  }
}

export default App;
