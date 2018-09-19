import { toast } from 'react-toastify';

const INITIAL_STATE = { error: null, data: [] };

export default function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_DEV_SUCCESS':
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
    case 'ADD_DEV_FAILURE':
      toast.error('Não foi possível adicionar dev!');
      return { ...state, error: action.payload.error };
    case 'REMOVE_DEV':
      toast.success('Dev removido com sucesso!');
      return {
        error: null,
        data: [...state.data.filter(dev => dev.id !== action.payload.id)],
      };
    default:
      return state;
  }
}
