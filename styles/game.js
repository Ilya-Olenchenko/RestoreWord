import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke'
    },
    container1: {
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
    },
    container2: {
        width: '100%',
        height: '60%',
        alignContent: 'center',
        alignItems: 'center',
    },
    box1: {
        height: 60,
        marginBottom: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    box2: {
        height: 70,
        width: '10%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    button1: {
        width: 30,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
        paddingLeft: 1
    },
    button2: {
        width: 30,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
        paddingLeft: 1
    },
    word1: {
        fontSize: 30,
        fontFamily: 'robot-media',

    },
    word2: {
        fontSize: 30,
        fontFamily: 'robot-media'
    },
    backView: {
        width: '90%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 15
    },
    backButton: {
        borderColor: 'black',
        borderRadius: 4,
        borderWidth: 1,
    },
    backText: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 20,
        fontFamily: 'robot-media'
    },
    backwordnumber: {
        marginTop: 80
    },
    startButton: {
        borderColor: 'black',
        borderRadius: 4,
        borderWidth: 1,
    }
})
