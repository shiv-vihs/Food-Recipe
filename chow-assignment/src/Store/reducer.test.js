import reducer from "./reducer";
import * as actionType from "./actions/actionTypes";

describe("reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      login: true,
      signup: false,
      clicked: false,
      RecipeList: {},
    });
  });
  it("should return clicked state", () => {
    expect(
      reducer(
        { login: true, signup: false, clicked: false, RecipeList: {} },
        { type: "DROP_DOWN_STATE" }
      )
    ).toEqual({
      login: true,
      signup: false,
      clicked: true,
      RecipeList: {},
    });
  });
  it("should change to login", () => {
    expect(
      reducer(
        { login: true, signup: false, clicked: false, RecipeList: {} },
        { type: "CHANGE_TO_LOGIN" }
      )
    ).toEqual({
      login: true,
      signup: false,
      clicked: false,
      RecipeList: {},
    });
  });
  it("should change to signup", () => {
    expect(
      reducer(
        { login: true, signup: false, clicked: false, RecipeList: {} },
        { type: "CHANGE_TO_SIGNUP" }
      )
    ).toEqual({
      login: false,
      signup: true,
      clicked: false,
      RecipeList: {},
    });
  });
  it("should return updated RecipeList", () => {
    expect(
      reducer(
        { login: true, signup: false, clicked: false, RecipeList: {} },
        { type: actionType.INIT_RECIPELIST, list: {} }
      )
    ).toEqual({
      login: true,
      signup: false,
      clicked: false,
      RecipeList: {},
    });
  });
});
