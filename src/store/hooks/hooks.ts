import {rootReducer} from "../store"
import {useSelector, TypedUseSelectorHook, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from '../action-creators/actionCreators'

// hook for useSelector, get type from reducer
type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector

// hook for all actions
export const useActions = ()=>{
    const dispatch = useDispatch()
    return bindActionCreators(actionCreators , dispatch)
}
