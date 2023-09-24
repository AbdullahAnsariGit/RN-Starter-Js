import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation?.navigate('Details')}>
                <Text>navigation</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})