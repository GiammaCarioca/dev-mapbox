import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addDevSuccess, addDevFailure } from '../actions/devs';

export function* addFaveDev(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.faveDev}`);

    const { latitude, longitude } = action.payload;

    const faveDevData = {
      id: data.id,
      name: data.name,
      username: data.login,
      avatar: data.avatar_url,
      latitude,
      longitude,
    };

    yield put(addDevSuccess(faveDevData));
  } catch (error) {
    yield put(addDevFailure('Erro ao adicionar dev'));
  }
}
