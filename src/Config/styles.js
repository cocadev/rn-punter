import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 24,
        backgroundColor: '#fff'
    },
    view: {
        marginTop: 22,
        marginHorizontal: 22
    },
    headText: {
        fontSize: 14,
        color: 'white',
    },
    titleText: {
        fontSize: 17,
        marginTop: 8,
        color: '#2699FB',
    },
    noteText: {
        fontSize: 18,
        color: '#2699FB',
    },
    textInput:{
        height: 46, 
        marginVertical: 9,
        padding: 12,
        fontSize: 15,
        color: '#2699FB',
        borderColor: '#2699FB', 
        borderWidth: 1
    },
    normalText:{
        color: '#2699FB', 
        fontSize: 10
    }
    
})

export default styles;