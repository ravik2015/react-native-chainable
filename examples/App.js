import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Chainable from 'react-native-chainable';

export default class App extends React.Component {
  state = {
    email: '',
    password: '',
    confirm: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Chainable.Form>
          {chain => (
            <React.Fragment>
              <Chainable.Input
                name="email"
                style={{ width: 150, borderWidth: 1, borderColor: 'dimgrey' }}
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                onSubmitEditing={() => chain('password')}
              />
              <Chainable.Input
                name="password"
                style={{ width: 150, borderWidth: 1, borderColor: 'dimgrey' }}
                secureTextEntry
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
                onSubmitEditing={() => chain('confirm')}
              />
              <Chainable.Input
                name="confirm"
                style={{ width: 150, borderWidth: 1, borderColor: 'dimgrey' }}
                secureTextEntry
                value={this.state.confirm}
                onChangeText={text => this.setState({ confirm: text })}
                isLast
              />
            </React.Fragment>
          )}
        </Chainable.Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
