import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import IndexScreen from './screens/index';

RootRouter = StackNavigator({
  Index: {
    screen: IndexScreen
  },
  Web: {
    screen: WebScreen
  }
}, {
  navigationOptions: {
    header: null
  }
}, {
  initialRouteName: 'Index'
});

export default class App extends Component {
  render() {
    return (
      <RootRouter />
    )
  }
}
