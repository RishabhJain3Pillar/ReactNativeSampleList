import { ARTICLES } from '../reduxConstants';

export default function (state = {}, action) {
  const { type, data } = action;

  switch (type) {
    case ARTICLES:
      return { ...state, articles: data };
    default:
      return state;
  }
}
