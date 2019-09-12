import React, { PureComponent } from 'react';
//import UI from react-native
import { View, Text } from 'react-native';
//import styles for component.
import styles from './styles';

class ArticleDetails extends PureComponent {
    //Define your navigationOptions as a function to have access to navigation properties, since it is static.
    static navigationOptions = ({navigation}) => ({
        //Use getParam function to get a value, also set a default value if it undefined.
        title: 'NY Times Article Details',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#652C8F', borderWidth: 1, borderBottomColor: 'white' },
        headerTitleStyle: { color: 'white' } 
    })
    //Define your class component
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.articleDetailsText}>{navigation.getParam('abstract')}</Text>
            </View>
        );
    }
}
export default ArticleDetails;