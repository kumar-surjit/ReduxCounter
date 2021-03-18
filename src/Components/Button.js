import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import store from '../redux/store';
import types from '../redux/actionTypes';

export default class Button extends Component {
  add = () => {
    store.dispatch({type: types.INR, payload: 1});
  };

  subtract = () => {
    store.dispatch({type: types.DCR, payload: 1});
  };

  render() {
    const {type, label} = this.props;
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'pink',
          paddingHorizontal: 30,
          paddingVertical: 15,
          borderRadius: 15,
        }}
        onPress={type === 'add' ? this.add : this.subtract}>
        <Text style={{color: '#fff'}}>{label}</Text>
      </TouchableOpacity>
    );
  }
}
