import React, { useState } from 'react';
import { Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from '../styles/game'

var point = 0
var chek = false
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
            </TouchableOpacity>
        )
    }

    const Word = (props) => {
        return (
            < TouchableOpacity style={styles.button2}
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
        replyWord[index] = <Word index={index} item={'-'} />;
        setWords([...replyWord])

        randomwords[index] = <ConfusedWord index={index} item={item} />;
        setRandomWords([...randomwords])

        console.log("words")
        console.log(words)

        console.log("arr")
        console.log(replyWord)
    }

    const EditItem = (index, item) => {
        var i = 0
        const temp = <Word index={i} item={'-'} />
        randomwords[index] = <ConfusedWord index={index} item={'-'} />;
        setRandomWords([...randomwords])

        while (replyWord.length > i) {
            if (replyWord. === temp) {
                console.log("true")
                //replyWord[i] = <ConfusedWord index={index} item={item} />;
            }
            console.log(replyWord[i])
            //console.log(<Word index={i} item={"-"} />)
            i++
        }
        //replyWord[index] = <Word index={index} item={item} />;
        setWords([...replyWord])

        // console.log("words")
        // console.log(words)

        // console.log("arr")
        // console.log(replyWord)
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
