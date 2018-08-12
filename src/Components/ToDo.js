import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

const TodoItem = ({text,onPress}) => (
  <View style={styles.view}>
      <Text style={styles.text}>{text}</Text>
      <View style={{width:70}}>
      <Button
        title = 'Done?'
        color = '#841584'
        onPress = {onPress}
        alignSelf='flex-end'
      />
      </View>
  </View>
)

TodoItem.propTypes = {
    onPress: PropTypes.func.isRequired,
    //isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        marginVertical:3
    },
    text:{
        fontSize:15,

    }
})
export default TodoItem