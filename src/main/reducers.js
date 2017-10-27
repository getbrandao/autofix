import { combineReducers } from "redux";
import MenuReducer from "../common/template/menuReducer";
import TabReducer from "../common/tab/tabReducer";

const rootReducer = combineReducers({
    menu: MenuReducer,
    tab: TabReducer
});

export default rootReducer;
