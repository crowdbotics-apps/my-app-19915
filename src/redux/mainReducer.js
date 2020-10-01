import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn11120009Reducer from '../features/SignIn11120009/redux/reducers'
import SignUp12120008Reducer from '../features/SignUp12120008/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn11120009: SignIn11120009Reducer,
SignUp12120008: SignUp12120008Reducer,

});