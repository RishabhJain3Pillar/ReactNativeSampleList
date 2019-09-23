import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ArticleList from '../src/components/articleList'
import mockStore from 'redux-mock-store';
import { FlatList } from 'react-native';
import { expect as expectChai } from 'chai';


//By using Enzyme, Chai
const mockDataArticles = [
    {
      id: 'id-1',
      byline: 'Article Title-1',
      abstract: 'describe article 1',
    },
    {
      id: 'id-2',
      byline: 'Article Title-2',
      abstract:'describe article 2',
    },
    {
      id: 'id-3',
      byline: 'Article Title-3',
      abstract: 'describe article 3',
    },
  ]
it('renders all children', () => {
  const initialState = { articleList: mockDataArticles };
  const store = mockStore(initialState)

  const wrapper = shallow(
    <ArticleList store={store} />
  );

  const component = shallow(wrapper.getNodes()[0]);

  expectChai(component.find(FlatList).length).to.equal(1);
  expectChai(component.find(FlatList).at(0).props().data.length).to.equal(mockDataArticles.length);
  expect(toJson(component)).toMatchSnapshot();
});