import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

const TodoItem = ({text,onPress}) => (
  <View>
      <Text style={styles.text}>{text}</Text>
      <Button
        title = 'Done'
        color = '#841584'
        onPress = {onPress}
      />
  </View>
)

TodoItem.propTypes = {
    onPress: PropTypes.func.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    text:{
        fontSize:25,

    }
})
export default TodoItem