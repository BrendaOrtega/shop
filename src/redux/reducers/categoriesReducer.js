import {DELETE_CATEGORY_SUCCES, GET_CATEGORIES_SUCCESS, SAVE_CATEGORY_SUCCESS} from "../actions/categoryActions";

export function categoriesReducer(state=[], action){
    switch(action.type){
        case GET_CATEGORIES_SUCCESS:

            return [...state, action.categories];
        case DELETE_CATEGORY_SUCCES:
            let category = action.category;
            return state.filter(p=>(p.id!==category.id));
        case SAVE_CATEGORY_SUCCESS:
            let list = state.filter(p=>(p.id!==action.category.id));
            let newC = action.category;
            return [...list, newC];
        default:
            return state;
    }
}