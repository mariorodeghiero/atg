import types from './types';

const INITIAL_STATE = {
    data: [],
    error: false,
    loading: false,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_GAME_SCHEDULE_REQUEST:
      return { ...state, loading: true };
    case types.GET_GAME_SCHEDULE_SUCCESS:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case types.GET_GAME_SCHEDULE_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;