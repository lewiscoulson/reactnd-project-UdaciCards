import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { white } from '../utils/colors'

import { getDecks } from '../utils/api'

import DeckCard from './DeckCard'

class Decks extends Component {
  state = {
  }

  componentDidMount() {
      getDecks()
        .then((decks) => {
          if (decks) {
            this.setState({
              decks: JSON.parse(decks)
            })
          }
        })
  }

  reloadDecks = () => {
    getDecks()
      .then((decks) => {
        if (decks) {
          this.setState({
            decks: JSON.parse(decks)
          })
        }
      })
  }

  render() {
    let decks = [];

    if (this.state.decks) {
      decks = Object.keys(this.state.decks);
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          {decks.map((deckTitle) => {
            return (
              <TouchableOpacity
                key={deckTitle}
                onPress={() => this.props.navigation.navigate(
                  'DeckDetail',
                  { deck: this.state.decks[deckTitle], refresh: this.reloadDecks }
                )}
              >
                <DeckCard deck={this.state.decks[deckTitle]} />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
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