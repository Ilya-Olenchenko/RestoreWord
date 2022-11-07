import React, { useState } from 'react';
import { Text, View, StatusBar, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import { styles } from '../styles/game'

var point = 0
var chek = false
let number = 0

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
    const [words, setWords] = useState([]);
    const [randomwords, setRandomWords] = useState([]);

    const putNullWords = () => {
        //putRandomWords
        confusedArr.map((item, index) => (
            randomwords[index] = item
        ))
        //putRandomWords
        var i = 0
        while (WORDS[point].leng > i) {
            words[i] = '-'
            i++
        }
    }

    const EditItem = (index, item) => {
        let i = 0
        while (WORDS[point].leng < i) {
            console.log(i)
            i++
        }
    }

    if (chek === false) {
        putNullWords()
        console.log("putNullWords-putRandomWords")
    }
    chek = true
    console.log(randomwords)
    console.log(words)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box1}>
                <FlatList horizontal={true} data={randomwords} renderItem={({ index, item }) => (
                    <TouchableOpacity key={index} style={styles.button1}
                        onPress={() => EditElementFromRandomwords(index, item)}>
                        <Text style={styles.word1}>{item} </Text>
                    </TouchableOpacity>
                )} />
            </View>

            <View style={styles.box1}>
                <FlatList horizontal={true} data={words} renderItem={({ index, item }) => (
                    <TouchableOpacity key={index} style={styles.button1}
                        onPress={() => deleteElementFromWords(index, item)}>
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
//додати кнопку "назад"
//поправити нумбер