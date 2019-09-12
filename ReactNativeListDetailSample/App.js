/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//first import createStackNavigator from react-navigation
//then import StackNavigator for creatign nested routes
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//Import your screens 
import ArticleList from './src/components/articleList';
import ArticleDetails from './src/components/articleDetails';

//Define your routes using createStackNavigator, which will be a object full of options. 
const RootStack = createStackNavigator({
  //Define your screens.
  ArticleList: { screen: ArticleList },
  ArticleDetails: {screen: ArticleDetails }
},
{
  initialRouteName:  'ArticleList'
})

const App = createAppContainer(RootStack);
export default App;
