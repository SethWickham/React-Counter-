import React from 'react';
import Counter from './Counter';

import { connect } from 'react-redux';
import {
  increment,
  decrement,
  addNumber,
  numberChanged
} from '../actions/index';

//inline heading style
const headStyle = {
  textAlign: 'center',
  fontSize: '77px'
};
class App extends React.Component {
  render() {
    return (
      <div>
        <h3 style={headStyle}>Counter</h3>

        <Counter
          count={this.props.count}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          count2={this.props.count2}
          onAddNumber={this.props.onAddNumber}
          onNumberChanged={this.props.onNumberChanged}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onAddNumber: number => dispatch(addNumber(number)),
    onNumberChanged: number => dispatch(numberChanged(number))
  };
}
function mapStateToProps(state) {
  return {
    count: state.count,
    count2: state.count2,
    addNumber: state.addNumber
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
