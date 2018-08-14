import {
  INDEX_PAGE_LOAD_SUCCESS
} from './types'

import { data } from './data';

const initialState = {
  electronics: data
}
export default function indexPageReducer(state = initialState, action) {
  switch (action.type) {
    case INDEX_PAGE_LOAD_SUCCESS:
      return {
        ...state,
        electronics: action.electronics
      };
    default:
      return state;
  }
}
