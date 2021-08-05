import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export function SkillButton({ skill }) {
    return (
        <TouchableOpacity
            style={styles.skill}
            activeOpacity={.7}
        >
            <Text style={styles.skillText}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    skill: {
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        padding: 20,
        borderRadius: 7,
        marginTop: 20,
    },
    skillText: {
        color: "#000",
        fontSize: 18
    }
})