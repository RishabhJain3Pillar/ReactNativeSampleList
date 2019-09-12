//import styleSheet for creating a css abstraction.
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItemContainer: {
        backgroundColor: '#f5f5f5',
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        marginHorizontal: 8,
        marginVertical: 8,
        borderRadius: 4,
        flexDirection: "column",
    },
    articleTitle: {  
        fontSize: 16,
    },
    articleAuthor: {
        marginTop: 8,
        fontSize: 12,
        fontWeight: 'bold'
    },
})
export default styles;