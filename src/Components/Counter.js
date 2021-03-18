import React, {Component} from 'react';
import {View, Text} from 'react-native';
import store from '../redux/store';

export default class Counter extends Component {
  state = {};
  updateCounter = () => {
    this.setState({});
  };

  componentDidMount = () => {
    store.subscribe(this.updateCounter);
  };

  render() {
    const {counter} = store.getState();
    return (
      <View style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 40}}>{counter}</Text>
      </View>
    );
  }
}
