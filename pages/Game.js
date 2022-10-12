import React from 'react'
import { Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from '../styles/game'

var point = 0

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

//const Word = (props) => {return ()}

function getWords(point) {
    const arr = WORDS[point].word.split('')
    return arr
}

function getRandWords(point) {
    const randArr = WORDS[point].word.split('')
    shuffle(randArr)
    return randArr
}

let replyWord = []

function putNullWords() {
    var i = 0
    while (WORDS[point].leng > i) {
        replyWord[i] = "-"
        i++
    }

    return replyWord
}

export default function Game() {
    let confusedArr = getRandWords(point)
    putNullWords()

    console.log(replyWord)
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={styles.box1}>
                {
                    confusedArr.map((item, index) => (
                        <TouchableOpacity key={index} style={{ borderWidth: 1, marginRight: 10, }}>
                            <Text style={{ fontSize: 40, padding: 5, fontFamily: 'alkalami-regula' }}>{item} </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>

            <View
                style={styles.box2}>
                {
                    replyWord.map((item, index) => (
                        <TouchableOpacity key={index} style={{ borderWidth: 1, marginRight: 10 }}>
                            <Text style={{ fontSize: 40, padding: 5 }}>{item} </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>


            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#17153C"
            />
        </SafeAreaView >
    );
}
