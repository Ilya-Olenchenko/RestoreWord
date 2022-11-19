import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from '../styles/game'

let number = 0
const WORDS0 = [
    {
        id: 0,
        word: 'радіо',
        leng: 5
    },
    {
        id: 2,
        word: 'слово',
        leng: 5
    },
    {
        id: 3,
        word: 'буда',
        leng: 4
    },
    {
        id: 4,
        word: 'аміак',
        leng: 5
    },
    {
        id: 5,
        word: 'білка',
        leng: 5
    },
    {
        id: 6,
        word: 'горщик',
        leng: 6
    },
    {
        id: 7,
        word: 'десерт',
        leng: 6
    },
    {
        id: 8,
        word: 'князь',
        leng: 5
    },
    {
        id: 9,
        word: 'гієна',
        leng: 5
    },
    {
        id: 10,
        word: 'серп',
        leng: 4
    }
]

const WORDS1 = [
    {
        id: 1,
        word: 'лиходійка',
        leng: 9
    },
    {
        id: 2,
        word: 'струмок',
        leng: 7
    },
    {
        id: 3,
        word: 'балаган',
        leng: 7
    },
    {
        id: 4,
        word: 'вермішель',
        leng: 9
    },
    {
        id: 5,
        word: 'сорочка',
        leng: 7
    },
    {
        id: 6,
        word: 'альпініст',
        leng: 9
    },
    {
        id: 7,
        word: 'андероль',
        leng: 8
    },
    {
        id: 8,
        word: 'лавочник',
        leng: 8
    },
    {
        id: 9,
        word: 'портфель',
        leng: 8
    },
    {
        id: 10,
        word: 'агроном',
        leng: 7
    }
]


export default function Game() {
    const [level, setLevel] = useState('');
    const [words, setWords] = useState([]);
    const [randomwords, setRandomWords] = useState([]);
    const [buttonstart, setButtonStart] = useState('flex');
    const [safeareaview, setSafeAreaView] = useState('flex');
    const [finalwindow, setFinalWindow] = useState('none');

    const load = async () => {
        try {
            let level = await AsyncStorage.getItem('key_level');
            if (level !== null) {
                setLevel(parseInt(level, 10));
            }
            console.log(level)
        } catch (err) {
            alert(err);
        }
    }


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
        if (level === 0) {
            const randArr = WORDS0[number].word.split('')
            shuffle(randArr)
            return randArr
        }
        if (level === 1) {
            const randArr = WORDS1[number].word.split('')
            shuffle(randArr)
            return randArr
        }
    }

    function checking(words) {
        let chek = 0
        let i = 0
        if (level === 0) {
            while (WORDS0[number].leng > i) {
                if (words[i] === WORDS0[number].word[i]) {
                    chek += 1
                }
                i++
            }
            if (chek === WORDS0[number].leng) {
                number++
                if (number === 10) {
                    setSafeAreaView('none')
                    setFinalWindow('flex')
                }
                else
                    putNullWords()
            }

        }

        if (level === 1) {
            while (WORDS1[number].leng > i) {
                if (words[i] === WORDS1[number].word[i]) {
                    chek += 1
                }
                i++
            }
            if (chek === WORDS1[number].leng) {
                number++
                if (number === 10) {
                    setSafeAreaView('none')
                    setFinalWindow('flex')
                }
                else
                    putNullWords()
            }
        }
    }


    function putNullWords() {
        setButtonStart('none')
        //shuffle(WORDS0)
        //shuffle(WORDS1)
        const confusedArr = getRandWords()
        setRandomWords(confusedArr)
        words.length = 0
        var i = 0
        if (level === 0) {
            while (WORDS0[number].leng > i) {
                words[i] = '-'
                i++
            }
        }
        if (level === 1) {
            while (WORDS1[number].leng > i) {
                words[i] = '-'
                i++
            }
        }
        setWords([...words])
        return 0
    }

    const EditElementFromRandomwords = (index, item) => {
        if (item !== '-') {
            let i = 0
            if (level === 0) {
                while (WORDS0[number].leng > i) {
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
            if (level === 1) {
                while (WORDS1[number].leng > i) {
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
    }
    const DeleteElementFromWords = (index, item) => {
        if (item !== '-') {
            let i = 0
            if (level === 0) {
                while (WORDS0[number].leng > i) {
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
            if (level === 1) {
                while (WORDS1[number].leng > i) {
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
    }

    useEffect(() => {
        load();
    }, []);
    safeareaview
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Вгадано слів: {number} з 10</Text>
            </View>

            <View style={{ display: finalwindow }}>
                <Text>Ти пройшов гру!</Text>
            </View>
            <View style={{ display: safeareaview }}>
                <TouchableOpacity style={{ display: buttonstart }} onPress={() => putNullWords()}>
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

                <View style={styles.box1}>
                    <FlatList horizontal={true} data={words} renderItem={({ index, item }) => (
                        <TouchableOpacity key={index} style={styles.button1}
                            onPress={() => DeleteElementFromWords(index, item)}>
                            <Text style={styles.word1}>{item} </Text>
                        </TouchableOpacity>
                    )} />
                </View>
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

