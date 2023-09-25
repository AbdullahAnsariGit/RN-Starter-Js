import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomContainer from '../../../components/CustomContainer'

const Details = () => {
  return (
    <CustomContainer
      children={
        <View>
          <Text style={{ color: '#ffff' }}>Text</Text>
        </View>
      }
    />
  )
}

export default Details

const styles = StyleSheet.create({})