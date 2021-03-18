import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Button from './src/Components/Button';
import Counter from './src/Components/Counter';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Counter />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          <Button type="add" label="Increment" />
          <Button type="subtract" label="Decrement" />
        </View>
      </View>
    );
  }
}
