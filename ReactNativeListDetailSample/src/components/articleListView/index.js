//import React form react
import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
//import styles from your PokeCard component.
import styles from './styles';

//Define your stateless components, and destrcuts props from function arguments
const ArticleListView = ({title, byline, abstract, navigation}) => {
    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => navigation.navigate('ArticleDetails', {abstract})}>
            <View  style={styles.listItemContainer}>
                <Text style={styles.articleTitle}>{title}</Text>
                <Text style={styles.articleAuthor}>{byline}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ArticleListView;