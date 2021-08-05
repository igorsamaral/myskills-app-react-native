import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export function Button({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>   
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#06C167",
        alignItems: "center",
        padding: 20,
        borderRadius: 7,
        marginTop: 20,
        color: "#FFF"
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    }
})