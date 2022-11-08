import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from '../styles/game'

const WORDS = [
    {
        id: 0,
        word: 'радіо',
        leng: 5
    },
    {
        id: 1,
        word: 'слово',
        leng: 5
    },
    {
        id: 2,
        word: 'собака',
        leng: 6
    },
    {
        id: 3,
        word: 'антологія',
        leng: 9
    }
]

export default function Game({ level }) {
    const [words, setWords] = useState([]);
    const [randomwords, setRandomWords] = useState([]);

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function getRandWords() {
        const randArr = WORDS[level].word.split('')
        shuffle(randArr)
        return randArr
    }

    function checking(words) {
        let chek = 0
        let i = 0
        while (WORDS[level].leng > i) {
            if (words[i] === WORDS[level].word[i]) {
                chek += 1
            }
            i++
        }
        if (chek === WORDS[level].leng)
            console.log("WIN")
    }

    function putNullWords() {
        const confusedArr = getRandWords(level)
        setRandomWords(confusedArr)
        words.length = 0
        var i = 0
        while (WORDS[level].leng > i) {
            words[i] = '-'
            i++
        }
        return 0
    }

    const EditElementFromRandomwords = (index, item) => {
        if (item !== '-') {
            let i = 0
            while (WORDS[level].leng > i) {
                if (words[i] === '-') {
                    words[i] = item
                    randomwords[index] = '-'
                    setRandomWords([...randomwords])
                    setWords([...words])
                    break
                }
                i++
            }
            checking(words)
        }
    }

    const DeleteElementFromWords = (index, item) => {
        if (item !== '-') {
            let i = 0
            while (WORDS[level].leng > i) {
                if (randomwords[i] === '-') {
                    words[index] = '-'
                    randomwords[i] = item
                    setWords([...words])
                    setRandomWords([...randomwords])
                    break
                }
                i++
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => putNullWords()}>
                <Text>Старт</Text>
            </TouchableOpacity>

            <View style={styles.box1}>
                <FlatList horizontal={true} data={randomwords} renderItem={({ index, item }) => (
                    <TouchableOpacity key={index} style={styles.button1}
                        onPress={() => EditElementFromRandomwords(index, item)}>
                        <Text style={styles.word1}>{item} </Text>
                    </TouchableOpacity>
                )} />
            </View>

            <View style={styles.box1}>0
                <FlatList horizontal={true} data={words} renderItem={({ index, item }) => (
                    <TouchableOpacity key={index} style={styles.button1}
                        onPress={() => DeleteElementFromWords(index, item)}>
                        <Text style={styles.word1}>{item} </Text>
                    </TouchableOpacity>
                )} />
            </View>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#17153C"
            />
        </SafeAreaView >
    );
}