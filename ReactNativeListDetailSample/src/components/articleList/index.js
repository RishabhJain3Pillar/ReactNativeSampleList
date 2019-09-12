//import PureCompoent for preventing unnecesary updates. 
import React, { PureComponent } from 'react';
//import comopnents
import ArticleListView from '../articleListView';
//import your components from react-native 
import {  FlatList, ActivityIndicator } from 'react-native';
//import styles for your component
import styles from './styles';

export default class ArticleList extends PureComponent {
    //Define your state for your component. 
    state = {
        //Assing a array to your pokeList state
        articleList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true
    }
    //Define your navigation options in a form of a method so you have access to navigation props.
    static navigationOptions = {
        title: 'NY Times Most Popular',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#159857', borderWidth: 1, borderBottomColor: 'white' },
        headerTitleStyle: { color: 'white' }
    }
    //Define your componentDidMount lifecycle hook that will retrieve data.
    //Also have the async keyword to indicate that it is asynchronous. 
    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            const articleListApi = await fetch('http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=9TCjnR6easVY8xJdJPlUFfI78wpo1bpk');
            const latestArticleJsonData = await articleListApi.json();
            this.setState({articleList: latestArticleJsonData.results, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }
    render() {
        //Destruct pokeList and Loading from state.
        const { articleList, loading } = this.state;
        //Destruct navigation from props 
        const { navigation } = this.props;
        //If loading to false, return a FlatList which will have data, renderItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if(!loading) {
            return <FlatList 
                    data={articleList}
                    renderItem={(data) => <ArticleListView {...data.item} navigation={navigation} />}
                    keyExtractor={(item) => `${item.id}`} 
                    />
        } else {
            return <ActivityIndicator />
        }
    }
}