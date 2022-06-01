import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import Reducer from './Reducer'

const reducer = combineReducers({  Reducer });

export const store = configureStore({ reducer: reducer })

