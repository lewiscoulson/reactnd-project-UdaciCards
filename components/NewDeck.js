import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { white } from '../utils/colors'
import { getDeck, getDecks, saveDeckTitle } from '../utils/api'

import Button from './Button'

class NewDeck extends Component {
  state: {
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

  submit = () => {
    if (this.state.text) {
      saveDeckTitle(this.state.text)
        .then(() => {
          getDeck(this.state.text)
            .then((deck) => {
              this.props.navigation.navigate(
                'DeckDetail',
                { deck, refresh: this.reloadDecks }
              )
            })
        })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 30, marginBottom: 30}}
          onChangeText={(text) => this.setState({text})}
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
  title: {
    fontSize: 30,
    textAlign: 'center'
  }
})

export default NewDeck