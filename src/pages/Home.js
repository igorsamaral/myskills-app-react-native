import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import { Button } from '../components/Button'
import { SkillButton } from '../components/SkillButton'

export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState([])

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hey, Igor
            </Text>

            <TextInput 
                style={styles.input}
                placeholder="Nova habilidade"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button
                onPress={handleAddNewSkill}
            />

            <Text style={[styles.title, {marginTop: 50}]}>
                Minhas habilidades
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillButton skill={item} />
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000"
    },
    input: {
        backgroundColor: "#F5F5F5",
        borderRadius: 7,
        marginTop: 30,
        fontSize: 18,
        padding: 20,
        color: "#000",
        lineHeight: 14,
    }
})