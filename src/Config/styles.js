import { StyleSheet, Platform } from 'react-native'
import { p } from './normalize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 24,
        backgroundColor: '#fff'
    },
    view: {
        marginTop: p(22),
        marginHorizontal: p(22)
    },
    headText: {
        fontSize: p(17),
        fontWeight: '600',
        color: 'white',
    },
    noteText: {
        fontSize: p(18),
        color: '#2699FB',
    },
    
    titleText: {
        fontSize: p(17),
        marginTop: p(8),
        color: '#2699FB',
    },
    
    textInput:{
        height: p(46), 
        marginVertical: p(9),
        padding: p(12),
        fontSize: p(15),
        color: '#2699FB',
        borderColor: '#2699FB', 
        borderWidth: 1
    },
    normalText:{
        color: '#2699FB', 
        fontSize: Platform.OS === 'ios' ? p(11) : p(13)
    }
    
})

export default styles;