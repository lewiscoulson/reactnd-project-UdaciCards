import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { white, gray } from '../utils/colors'

import Button from './Button'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params

    return {
      title: `${deck.title}`
    }
  }

  render() {
    const {deck, refresh} = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.cards}>{deck.questions.length} cards</Text>

        <Button
          onPress={() => {
            this.props.navigation.navigate(
                'AddCard',
                { deck, refresh }
            )}
          }>
          Add Card
        </Button>

        <Button
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            { deck}
        )}>
          Start Quiz
        </Button>
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
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  cards: {
    fontSize: 15,
    textAlign: 'center',
    color: gray,
    marginBottom: 30
  }
})

export default DeckDetail