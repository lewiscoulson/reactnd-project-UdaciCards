import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { white } from '../utils/colors'

import DeckCard from './DeckCard'

class Decks extends Component {
    state = {
      'React': {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      'JavaScript': {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }
  render() {
    const decks = Object.keys(this.state);

    return (
      <View style={styles.container}>
        {decks.map((deckTitle) => {
          return (
            <TouchableOpacity
              key={deckTitle}
              onPress={() => this.props.navigation.navigate(
                'DeckDetail',
                { deck: this.state[deckTitle] }
              )}
            >
              <DeckCard deck={this.state[deckTitle]} />
            </TouchableOpacity>
          )
        })}
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

export default Decks