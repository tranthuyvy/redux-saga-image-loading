//watch saga -> actions -> worker saga
import { takeEvery, select, put, call } from "redux-saga/effects";
import { setImages, setError } from "../actions";
import { IMAGES } from "../constants";
import { fetchImages } from "../api";

export const getPage = (state) => state.nextPage;

export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}
