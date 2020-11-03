import {takeEvery} from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes"
import {initRecipeListSaga} from "./home"

export function* watch(){
yield takeEvery(actionTypes.INIT_RECIPELIST, initRecipeListSaga);
}