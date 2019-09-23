import { render, describe, test, expect } from 'react-native-testing-library'
import { ArticleList } from '../src/components/articleList';
import { FlatList, Item } from 'react-native';

//react-native-testing-library using library instead of Engzme
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

describe('Testing article list', () => {
    test('Error component should be render when error is true', () => {
      const componentTree = render(
        <ArticleList articleList={mockDataArticles} />,
      )
      expect(componentTree.getAllByType(FlatList).length).toBe(1)
      expect(componentTree.getAllByType(Item).length).toBe(mockDataArticles.length)
    })
})