import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d2c3a'
    },
    container1: {
        width: 190,
        marginTop: 120,
        height: 50,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4ebfa7',
        borderRadius: 5
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
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
        paddingLeft: 1,
        backgroundColor: '#4ebfa7',
    },
    button2: {
        width: 30,
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
        backgroundColor: '#4ebfa7',
        borderRadius: 5,
        alignItems: 'center'
    },
    backText: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 15,
        fontFamily: 'robot-media',
        margin: 10,
    },
    backTextstart: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 20,
        fontFamily: 'robot-media',
        margin: 10,
    },
    startButton: {
        backgroundColor: '#4ebfa7',
        borderRadius: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8
    },
    modalView: {
        margin: 20,
        backgroundColor: "whitesmoke",
        borderRadius: 20,
        padding: 22,
        alignItems: "center",
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonClose: {
        backgroundColor: '#4ebfa7',
        borderRadius: 5,
        margin: 10,
        alignItems: 'center'
    },
    textStyle: {
        paddingLeft: 2,
        paddingRight: 2,
        fontSize: 15,
        fontFamily: 'robot-regular',
        margin: 2,
    },
    modalText: {
        fontFamily: 'robot-regular',
        marginBottom: 15,
        textAlign: "center"
    }
})
