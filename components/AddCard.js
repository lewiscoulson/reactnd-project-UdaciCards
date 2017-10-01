import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { white } from '../utils/colors'
import { addCardToDeck } from '../utils/api'

import Button from './Button'

class AddCard extends Component {
  state: {}

  componentDidMount() {
    const {deck} = this.props.navigation.state.params;

    this.setState({
      deck
    })
  }

  submit = () => {
    const {refresh} = this.props.navigation.state.params;

    if (this.state.question && this.state.answer) {
      addCardToDeck(this.state.deck.title, {
        question: this.state.question,
        answer: this.state.answer
      }).
      then(() => {
        refresh()
        this.props.navigation.navigate('Decks');
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Question</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 30}}
          onChangeText={(question) => this.setState({question})}
        />
        <Text>Answer</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 30}}
          onChangeText={(answer) => this.setState({answer})}
        />
        <Button onPress={this.submit}>Submit</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  },
})

export default AddCard