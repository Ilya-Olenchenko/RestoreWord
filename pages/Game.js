import React, { useState } from 'react';
import { Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from '../styles/game'

var point = 0
const replyWord = []
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

function getRandWords(point) {
    const randArr = WORDS[point].word.split('')
    shuffle(randArr)
    return randArr
}

function putNullWords() {
    var i = 0
    while (WORDS[point].leng > i) {
        replyWord[i] = "-"
        i++
    }
}

const confusedArr = getRandWords(point)

export default function Game() {
    const [words, setWords] = useState([]);

    function deleteElementFromWords(index) {
        setWords(words.filter(obj => obj.index !== index));
    }

    const Word = (props) => {
        return (
            < TouchableOpacity
                key={props.index} style={styles.button2}
                onPress={() => deleteElementFromWords(props.index)}>
                <Text style={styles.word2}>{props.item} </Text>
            </TouchableOpacity >
        )
    }

    const ConfusedWord = (props) => {
        return (
            confusedArr.map((item, index) => (
                <TouchableOpacity key={index} style={styles.button1}
                    onPress={() => setWords([...words, <Word item={item} index={index} />])}>
                    <Text style={styles.word1}>{item} </Text>
                </TouchableOpacity>
            ))
        )
    }

    console.log(words)
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.box1}>
                <ConfusedWord />
            </View>

            <View style={styles.box2}>
                {words.map(elem => elem)}
            </View>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#17153C"
            />
        </SafeAreaView >
    );
}
