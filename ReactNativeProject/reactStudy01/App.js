import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.baseState = this.state;
  }
  // initialState() {
  //   return {
  //     count: 0
  //   };
  // }
  // state = this.initialState();

  changeCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  resetState = () => {
    this.setState(this.baseState);
    // this.setState(this.initialState);
  };

  render() {
    const me = {
      name: 'Rex',
      age: 28,
      interest: ['Programming', 'Workout'],
      property: {
        appearance: 'Normal',
        character: 'Mild'
      },
      func: function() {
        alert('This is an alert!');
      }
    };
    return (
      <View style={styles.container}>
        <Text>Hello world RN!</Text>
        <Text>Count:{this.state.count}</Text>
        <Button title="changeCount" onPress={this.changeCount} />
        <Button title="resetState" onPress={this.resetState} />
        <People {...me} />
      </View>
    );
  }
}
const People = props => {
  return (
    <View>
      <Text>Name: {props.name}</Text>
      <Text>Age: {props.age}</Text>
      <Text>Interest: {props.interest[0]}</Text>
      <Text>Character: {props.property.character}</Text>
      <Text onPress={props.func}>Function</Text>
    </View>
  );
};

// class People extends Component {
//   render() {
//     const { name, age, interest, property, func } = this.props;
//     return (
//       <View>
//         <Text>Name: {name}</Text>
//         <Text>Age: {age}</Text>
//         <Text>Interest: {interest[0]}</Text>
//         <Text>Character: {property.character}</Text>
//         <Text onPress={func}>Function</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
