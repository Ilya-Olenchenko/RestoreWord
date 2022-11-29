import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d2c3a'
    },
    box2: {
        height: '100%',
        marginBottom: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 5,
        margin: 10,
        backgroundColor: '#4ebfa7',
        width: 200,
        height: 50,
        alignItems: 'center'
    },
    header: {
        height: 50,
        width: "100%",
        backgroundColor: '#4ebfa7',
        position: 'absolute',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    wordSettings: {
        fontSize: 20,
        fontFamily: 'alkalami-regula',
    },
    word: {
        fontSize: 20,
        fontFamily: 'alkalami-regula',
        paddingTop: 3,
    },
    word1: {
        fontSize: 16,
        fontFamily: 'alkalami-regula',
        marginTop: -15
    },
    backView: {
        width: '90%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 65
    },
    backButton: {

    },
    backText: {
        fontSize: 36,
        fontFamily: 'robot-media',
    },
})
