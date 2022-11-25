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
        width: 150,
        alignItems: 'center'
    },
    header: {
        height: 85,
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
        fontSize: 15,
        fontFamily: 'alkalami-regula',
        paddingTop: 5,
    },
    word1: {
        fontSize: 16,
        fontFamily: 'alkalami-regula',
        marginTop: -15
    }

})
