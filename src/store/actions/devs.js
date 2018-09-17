export const addDevRequest = (faveDev, latitude, longitude) => ({
  type: 'ADD_DEV_REQUEST',
  payload: { faveDev, latitude, longitude },
});

export const addDevSuccess = faveDevData => ({
  type: 'ADD_DEV_SUCCESS',
  payload: { faveDevData },
});

export const removeDev = id => ({
  type: 'REMOVE_DEV',
  payload: { id },
});