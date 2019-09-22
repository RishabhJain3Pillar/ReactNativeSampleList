import { Component } from 'react';
import NavigationService from '../../utils/NavigationService';

//first import createStackNavigator from react-navigation
//then import StackNavigator for creatign nested routes
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//Import your screens 
import ArticleList from '../articleList';
import ArticleDetails from '../articleDetails';

//Define your routes using createStackNavigator, which will be a object full of options. 
const RootStack = createStackNavigator({
  //Define your screens.
  ArticleList: { screen: ArticleList },
  ArticleDetails: {screen: ArticleDetails }
},
{
  initialRouteName:  'ArticleList'
})

const AppContainer = createAppContainer(RootStack);

export default class Router extends Component {
  render() {
    return (
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
