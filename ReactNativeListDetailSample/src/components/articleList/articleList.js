//import PureCompoent for preventing unnecesary updates. 
import React, { PureComponent } from 'react';

import {  FlatList, ActivityIndicator } from 'react-native';
//import styles for your component
import styles from './styles';

export default class ArticleList extends PureComponent {
    //Define your navigation options in a form of a method so you have access to navigation props.
    static navigationOptions = {
        title: 'NY Times Most Popular',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#159857', borderWidth: 1, borderBottomColor: 'white' },
        headerTitleStyle: { color: 'white' }
    }
    
    //Define your componentDidMount lifecycle hook that will retrieve data.
    componentDidMount() {
        const { updateArticleList } = this.props;
        updateArticleList();
    }

    onPress(item) {
        const { navigation } = this.props;
        navigation.navigate('ArticleDetails', { articleDetailsText: item.abstract });
    }

    renderListItem = item => (
        <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => this.onPress(item)}>
            <View  style={styles.listItemContainer}>
                <Text style={styles.articleTitle}>{item.title}</Text>
                <Text style={styles.articleAuthor}>{item.byline}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        //Destruct from props 
        const { articleList } = this.props;
        //If loading to false, return a FlatList which will have data, renderItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if(articleList.length > 0) {
            return <FlatList 
                    data={articleList}
                    renderItem={({ item }) => (this.renderListItem(item))}
                    keyExtractor={(item) => `${item.id}`} 
                    />
        } else {
            return <ActivityIndicator />
        }
    }
}