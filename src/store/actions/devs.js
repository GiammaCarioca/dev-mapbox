export const addDevRequest = (faveDev, lat, lng) => ({
  type: 'ADD_DEV_REQUEST',
  payload: { faveDev, lat, lng },
});

export const addDevSuccess = faveDevData => ({
  type: 'ADD_DEV_SUCCESS',
  payload: { faveDevData },
});

export const addDevFailure = error => ({
  type: 'ADD_DEV_FAILURE',
  payload: { error },
});

export const removeDev = id => ({
  type: 'REMOVE_DEV',
  payload: { id },
});
