import { CHANGE_FILTER } from './action-types';
export const changeFilter = filter => {
  return { type: CHANGE_FILTER, payload: filter };
};
