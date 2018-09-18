const INITIAL_STATE = { error: null, data: [] };

export default function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_DEV_SUCCESS':
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
            latitude: action.payload.faveDevData.latitude,
            longitude: action.payload.faveDevData.longitude,
          },
        ],
      };
    case 'ADD_DEV_FAILURE':
      return { ...state, error: action.payload.error };
    case 'REMOVE_DEV':
      return {
        error: null,
        data: [...state.data.filter(dev => dev.id !== action.payload.id)],
      };
    default:
      return state;
  }
}
