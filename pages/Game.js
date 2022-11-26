import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, SafeAreaView, TouchableOpacity, Modal, FlatList, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'
import { styles } from '../styles/game'

let number = 0
let counter = 0
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
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const [level, setLevel] = useState('');
    const [time, setTime] = useState('');
    const [counterTextMM, setcounterTextMM] = useState('00');
    const [counterTextSS, setcounterTextSS] = useState('00');
    const [words, setWords] = useState([]);
    const [randomwords, setRandomWords] = useState([]);
    const [buttonstart, setButtonStart] = useState('flex');
    const [safeareaview, setSafeAreaView] = useState('flex');

    const load = async () => {
        try {
            let level = await AsyncStorage.getItem('key_level');
            let time = await AsyncStorage.getItem('key_time');
            if (level !== null && time !== null) {
                setLevel(parseInt(level, 10));
                setTime(parseInt(time, 10));
                if (time == 120) {
                    setcounterTextMM('02')
                    setcounterTextSS('00')
                }
                else if (time == 60) {
                    setcounterTextMM('01')
                    setcounterTextSS('00')
                }
            }
            console.log(level, time)
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
                    counter = 0
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
                    counter = 0
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

    function timer() {
        counter = time
        const intervalId = setInterval(async () => {
            if (level === 0) {
                counter -= 1
                console.log(counter)

                if (counter <= 0) {
                    clearInterval(intervalId)
                    setModalVisible(true)
                    setcounterTextMM('00')
                    setcounterTextSS('00')
                }

                if (counter >= 60) {
                    setcounterTextMM('01')
                    if ((counter - 60) < 10)
                        setcounterTextSS('0' + (counter - 60))
                    else
                        setcounterTextSS(counter - 60)
                }

                else if (counter <= 60) {
                    setcounterTextMM('00')
                    if (counter < 10)
                        setcounterTextSS('0' + counter)
                    else
                        setcounterTextSS(counter)
                }
            }
            if (level === 1) {
                counter -= 1
                console.log(counter)

                if (counter <= 0) {
                    clearInterval(intervalId)
                    setModalVisible(true)
                    setcounterTextMM('00')
                    setcounterTextSS('00')
                }

                if (counter < 60) {
                    setcounterTextMM('00')
                    if (counter < 10)
                        setcounterTextSS('0' + counter)
                    else
                        setcounterTextSS(counter)
                }
            }
        }, 1000)
    }

    useEffect(() => {
        load();
    }, []);
    safeareaview
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.backwordnumber}>
                    <Text style={{ fontFamily: 'robot-regular' }}>Вгадано слів: {number} з 10</Text>
                </View>

                <View>
                    <Text style={{ fontFamily: 'robot-regular' }}>{counterTextMM} : {counterTextSS}</Text>
                </View>
            </View>

            <View style={styles.container2}>
                <View style={{ display: safeareaview }}>
                    <TouchableOpacity style={[{ display: buttonstart }, styles.startButton]}
                        onPress={() => {
                            timer()
                            putNullWords()
                        }}>
                        <Text style={styles.backTextstart}>Старт</Text>
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
                            <Pressable key={index} style={styles.button1}
                                onPress={() => DeleteElementFromWords(index, item)}>
                                <Text style={styles.word1}>{item} </Text>
                            </Pressable>
                        )} />
                    </View>
                </View>
            </View>

            <View style={styles.backView}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => {
                        setModalVisible(true),
                            counter = 0,
                            setcounterTextMM('00'),
                            setcounterTextSS('00')
                    }}>
                    <Text style={styles.backText}>Назад</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Кількість вгаданих слів: {number}</Text>
                        <TouchableOpacity
                            style={styles.buttonClose}
                            onPress={() => {
                                setModalVisible(!modalVisible),
                                    number = 0,
                                    navigation.replace('Main')
                            }}>
                            <Text style={styles.textStyle}>В меню</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#17153C"
            />
        </SafeAreaView >
    );
}