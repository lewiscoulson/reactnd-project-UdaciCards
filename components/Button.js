import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { black } from '../utils/colors'

export default function Button ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: black,
    borderWidth: 1,
    borderColor: black,
    borderStyle: 'solid',
    borderRadius: 5,
    marginBottom: 15,
    padding: 10
  }
})