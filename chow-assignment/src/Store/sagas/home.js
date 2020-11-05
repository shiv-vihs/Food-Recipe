import { put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions";

export function* initRecipeListSaga(action) {
  try {
    const response = yield axios.get(
      "https://foodrecipejson.firebaseio.com/RecipeList.json"
    );
    yield put(actions.setRecipeList(response.data));
  } catch (error) {
    console.log("Error");
  }
}
