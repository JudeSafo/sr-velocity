// Copyright Schulich Racing FSAE
// Written by Justin Tijunelis

import { Reducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";
import userReducer from "./userReducer";
import organizationReducer from "./organizationReducer";
import sensorReducer from "./sensorReducer";

const reducers = combineReducers({
  dashboard: dashboardReducer,
  user: userReducer,
  organization: organizationReducer,
  sensors: sensorReducer,
});

type RootState = ReturnType<typeof reducers>;
const rootReducer: Reducer = (state: RootState, action: any): RootState => {
  switch (action.type) {
    case "RESET":
      return reducers({} as RootState, action);
    default:
      return reducers(state, action);
  }
};

export { reducers, rootReducer };
