import React from 'react'
import { Text, View, StatusBar, SafeAreaView, Button, TouchableOpacity } from 'react-native'
import { styles } from '../styles/game'

var point = 0

const WORDS = [
    {
        id: 1,
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

const Word = (props) => {
    if (props.id === props.number) {
        const arr = props.word.split('')
        const randArr = props.word.split('')
        shuffle(randArr)

        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    {
                        arr.map((letter) => (
                            <TouchableOpacity style={{ borderWidth: 1, margin: 10 }}>
                                <Text style={{ fontSize: 40 }}>{letter} </Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>

                <View style={{ flexDirection: 'row' }}>
                    {
                        randArr.map((letter) => (
                            <TouchableOpacity style={{ borderWidth: 1, margin: 10 }}>
                                <Text style={{ fontSize: 40 }}>{letter} </Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        );
    }
}

export default function Game() {


    return (
        <SafeAreaView>
            {
                WORDS.map((item, index) =>
                    < View key={index} >
                        <Word id={item.id} number={2} word={item.word} />
                    </View>
                )
            }




            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#17153C"
            />
        </SafeAreaView >
    );
}
