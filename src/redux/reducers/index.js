import { combineReducers} from "redux";

import filtersReducer from './filters';
import oystersReducer from './oysters';

const rootReducer = combineReducers({
    filters: filtersReducer,
    oysters: oystersReducer,
})
export default rootReducer;
