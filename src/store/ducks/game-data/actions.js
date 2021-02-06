import types from "./types"

export const getGameDataRequest = (id) => ({
    type: types.GET_GAME_DATA_REQUEST,
    payload: id
});

export const getGameDataSuccess = (data) => ({
    type: types.GET_GAME_DATA_SUCCESS, 
    payload: { data }
});

export const getGameDataFailure = () => ({
    type: types.GET_GAME_DATA_FAILURE
});