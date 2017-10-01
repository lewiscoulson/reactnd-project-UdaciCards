import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'UdaciCards:decks1'

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
          .then((results) => {
            return results;
          })
}

export function getDeck (id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      return data[id];
    })
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: [title],
      questions: []
    }
  }))
}

export function addCardToDeck (title, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      
      return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
          questions: [...data[title].questions, card]
        }
      }))
    })

  
}

