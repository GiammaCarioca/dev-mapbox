import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as DevActions } from '../ducks/devs';

export function* addFaveDev(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.faveDev}`);

    const { lat, lng } = action.payload;

    const faveDevData = {
      id: data.id,
      name: data.name,
      username: data.login,
      avatar: data.avatar_url,
      lat,
      lng,
    };

    yield put(DevActions.addDevSuccess(faveDevData));
  } catch (error) {
    yield put(DevActions.addDevFailure('Erro ao adicionar dev'));
  }
}
