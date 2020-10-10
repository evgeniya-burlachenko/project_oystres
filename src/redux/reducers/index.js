import { combineReducers} from "redux";

import filtersReducer from './filters';
import oystersReducer from './oysters';

const rootReducer = combineReducers({
    filter: filtersReducer,
    oysters: oystersReducer,
})
export default rootReducer;
