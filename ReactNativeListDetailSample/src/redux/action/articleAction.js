import { ARTICLES } from '../reduxConstants';
import {
  Api,
  HTTP_METHODS,
  apiConst,
} from '../../utils';

// This function will fetch new alerts from API also count unread alerts and save list to redux
export function updateArticleList() {
  return dispatch => (
    Api.request({
      method: HTTP_METHODS.GET,
      baseURL: apiConst.baseUrl,
      urlEndpoint: apiConst.getArticleList,
    }).then((response) => {
      console.log(response);
      if (response.results) {
        const articleList = response.results;
          dispatch({
            type: ARTICLES,
            data: { articleList, loading : false}
        });
      }
    }).catch((error) => {
      console.log('error while fetching data:', error);
      dispatch({
        type: ARTICLES,
        data: { articleList:[], loading : true}
    });
    })
  );
}