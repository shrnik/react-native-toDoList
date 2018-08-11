import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

const CompletedItems = ({text}) => (
  <View>
      <Text style={styles.text}>{text}</Text>
  </View>
)

CompletedItems.propTypes = {
    text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    text:{
        fontSize:25,

    }
})
export default CompletedItems