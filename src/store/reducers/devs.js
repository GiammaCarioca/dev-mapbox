const INITIAL_STATE = [];

export default function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_DEV_SUCCESS':
      return [
        ...state,
        {
          id: action.payload.faveDevData.id,
          name: action.payload.faveDevData.name,
          username: action.payload.faveDevData.username,
          avatar: action.payload.faveDevData.avatar,
          latitude: action.payload.faveDevData.latitude,
          longitude: action.payload.faveDevData.longitude,
        },
      ];
    case 'REMOVE_DEV':
      return state.filter(dev => dev.id !== action.payload.id);
    default:
      return state;
  }
}
