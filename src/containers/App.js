import React, { Component } from 'react';

import { Counter } from '../components/counter'
import { Name } from '../components/name'

import { connect } from 'react-redux'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: null
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Title</h1>
        <Counter count={this.props.count} inc={(n)=>this.props.increment(n)} dec={(n)=>this.props.decrement(n)} />
        <Name user={this.props.user} nameChange={(name)=>this.props.nameChange(name)} />
      </div>
    );
  }
}

// Which actions, which properties of store in this component?

// Which properties of my global application state do I want to use in this component?
// Can choose which properties of global store the component needs
const mapStateToProps = (state) => {
  return {
    // These are from index.js reducers when store is created
    count: state.mathReducer,
    user: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // These are the actions to dispatch
    increment: (n) => {
      dispatch({
        type: 'INCREMENT',
        payload: n
      })
    },
    decrement: (n) => {
      dispatch({
        type: 'DECREMENT',
        payload: n
      })
    },
    nameChange: (name) => {
      dispatch({
        type: 'SET_NAME',
        payload: name
      });
    }
  }
}

// To execute above function, need to use connect to connect react and redux
// bind App to connect and export connect
export default connect(mapStateToProps, mapDispatchToProps)(App);