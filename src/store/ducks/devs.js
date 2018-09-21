import { toast } from 'react-toastify';

/**
 * Types
 */

export const Types = {
  ADD_REQUEST: 'dev/ADD_REQUEST',
  ADD_SUCCESS: 'dev/ADD_SUCCESS',
  ADD_FAILURE: 'dev/ADD_FAILURE',
  REMOVE: 'dev/REMOVE',
};

/**
 * Reducers
 */

const INITIAL_STATE = { error: null, data: [] };

export default function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_SUCCESS:
      toast.success('Dev adicionado com sucesso!');
      return {
        ...state,
        error: null,
        data: [
          ...state.data,
          {
            id: action.payload.faveDevData.id,
            name: action.payload.faveDevData.name,
            username: action.payload.faveDevData.username,
            avatar: action.payload.faveDevData.avatar,
            latitude: action.payload.faveDevData.lat,
            longitude: action.payload.faveDevData.lng,
          },
        ],
      };
    case Types.ADD_FAILURE:
      toast.error('Não foi possível adicionar dev!');
      return { ...state, error: action.payload.error };
    case Types.REMOVE:
      toast.success('Dev removido com sucesso!');
      return {
        error: null,
        data: [...state.data.filter(dev => dev.id !== action.payload.id)],
      };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addDevRequest: (faveDev, lat, lng) => ({
    type: Types.ADD_REQUEST,
    payload: { faveDev, lat, lng },
  }),

  addDevSuccess: faveDevData => ({
    type: Types.ADD_SUCCESS,
    payload: { faveDevData },
  }),

  addDevFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),

  removeDev: id => ({
    type: Types.REMOVE,
    payload: { id },
  }),
};
