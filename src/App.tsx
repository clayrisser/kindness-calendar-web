import React, { Component } from 'react';
import { load } from 'js-yaml';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  state = {
    kind: 'loading . . .'
  };

  render() {
    return <div>{this.state.kind}</div>;
  }

  async componentDidMount() {
    const res = await axios.get(
      'https://raw.githubusercontent.com/Betanya/kindness-calendar/master/kindness.yaml'
    );
    const kinds = load(res.data).kindness;
    const kind = kinds[Math.floor(Math.random() * kinds.length)];
    this.setState({ kind });
  }
}
