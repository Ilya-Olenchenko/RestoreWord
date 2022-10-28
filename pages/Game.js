import React, { useState } from 'react';
import { Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from '../styles/game'

var point = 0
var chek = false
let number = 0
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

export default function Game() {
    const confusedArr = getRandWords(point)
    const ConfusedWord = (props) => {
        return (
            <TouchableOpacity style={styles.button1}
                onPress={() => EditItem(props.index, props.item)}>
                <Text style={styles.word1}>{props.item} </Text>
                {console.log("props.index: " + props.index,)}
            </TouchableOpacity>
        )
    }

    const Word = (props) => {
        return (
            <TouchableOpacity style={styles.button2}
                onPress={() => deleteElementFromWords(props.index, props.item)}>
                <Text style={styles.word2}>{props.item} </Text>
            </TouchableOpacity >
        )
    }

    const [words, setWords] = useState([]);
    const [randomwords, setRandomWords] = useState([]);

    const putNullWords = () => {
        var i = 0
        while (WORDS[point].leng > i) {
            words[i] = <Word index={i} item={'-'} />
            replyWord[i] = words[i]
            i++
        }
    }

    const putRandomWords = () => {
        confusedArr.map((item, index) => (
            randomwords[index] = <ConfusedWord index={index} item={item} />
        ))
    }

    function deleteElementFromWords(index, item) {
        console.log("index: " + index)
        if (number >= 0) {
            replyWord[index] = <Word index={index} item={'-'} />;
            setWords([...replyWord])

            randomwords[index] = <ConfusedWord index={index} item={item} />;
            setRandomWords([...randomwords])
            number--
            console.log("number: " + number)
        }
    }

    const EditItem = (index2, item2) => {
        if (number < WORDS[point].leng) {
            randomwords[index2] = <ConfusedWord index={index2} item={'-'} />;
            setRandomWords([...randomwords])

            replyWord[number] = <Word index={index2} item={item2} />
            number++

            setWords([...replyWord])
            console.log("number: " + number)
        }
    }

    if (chek === false) {
        putRandomWords()
        console.log("putRandomWords")
        putNullWords()
        console.log("putNullWords")
    }
    chek = true

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box1}>
                {randomwords.map(elem => elem)}
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
