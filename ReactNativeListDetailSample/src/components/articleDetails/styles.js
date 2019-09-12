//import StyleSheet from react-native to provide styling via a css abstraction
import { StyleSheet } from 'react-native';

//Define your styles 
const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: "column",
    },
    articleImage: {
        height: 250,
        width: '100%'
    },
    articleDetailsText: {
        marginHorizontal: 16,
        marginTop: 16,  
        fontSize: 16,
    },
})
//Export your styles
export default styles;