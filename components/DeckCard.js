import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { white, black, gray } from '../utils/colors'

class DeckCard extends Component {
  render() {
    const {deck} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.cards}>{deck.questions.length} cards</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 15,
    borderBottomColor: black,
    borderStyle: 'solid',
    borderBottomWidth: 3
  },
  title: {
    fontSize: 20
  },
  cards: {
    color: gray
  }
})

export default DeckCard