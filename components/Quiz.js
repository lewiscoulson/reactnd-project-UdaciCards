import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { white, red, green } from '../utils/colors'
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers'

import TextButton from './TextButton'
import Button from './Button'

class Quiz extends Component {
  state = {
    currentQuestion: 0,
    showQuestion: true,
    showAnswer: false,
    isQuizComplete: false
  }

  componentDidMount() {
    const {deck} = this.props.navigation.state.params;

    this.setState({
      deck: deck,
      score: deck.questions.length,
      questionsLength: deck.questions.length
    })
  }

  toggleCard = () => {
    this.setState({
      showQuestion: !this.state.showQuestion,
      showAnswer: !this.state.showAnswer
    })
  }

  goToNextQuestion = (isCorrect) => {
    const nextQuestionIndex = this.state.currentQuestion + 1;

    if (!isCorrect) {
      this.setState({
        score: this.state.score - 1
      })
    }

    if (nextQuestionIndex < this.state.questionsLength) {
      this.setState({
        currentQuestion: nextQuestionIndex
      })
    } else {
      this.setState({
        isQuizComplete: true
      })

      clearLocalNotification()
        .then(setLocalNotification)
    }
  }

  restartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      isQuizComplete: false,
      score: this.state.questionsLength
    })
  }

  render() {
    const {currentQuestion, deck, showQuestion, showAnswer, questionsLength, score, isQuizComplete} = this.state;

    return (
      <View style={styles.container}>
        {deck && !isQuizComplete && <View>
          <Text>{currentQuestion + 1} / {deck.questions.length}</Text>
          {showQuestion && <Text style={styles.title}>{deck.questions[currentQuestion].question}</Text>}
          {showQuestion && <TextButton style={styles.textButton} onPress={this.toggleCard}>show answer</TextButton>}

          {showAnswer && <Text style={styles.title}>{deck.questions[currentQuestion].answer}</Text>}
          {showAnswer && <TextButton style={styles.textButton} onPress={this.toggleCard}>show question</TextButton>}

          <Button style={{backgroundColor: green, color: white}} onPress={() => this.goToNextQuestion(true)}>Correct</Button>
          <Button style={{backgroundColor: red, color: white}} onPress={() => this.goToNextQuestion(false)}>Incorrect</Button>
        </View>}

        {deck && isQuizComplete && <View>
          <Text style={styles.title}>your score is {parseInt((score / questionsLength) * 100, 10)}%</Text>
          <Button onPress={this.restartQuiz}>restart quiz</Button>
          <Button onPress={() => this.props.navigation.goBack()}>back to deck</Button>
        </View>}
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
    textAlign: 'center',
    marginTop: 30
  },
  textButton: {
    marginBottom: 30
  }
})

export default Quiz