import * as type from './../constants';
let DEFAULT_STATE = {
    listItem: null,
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessesage: null
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        // get page items
        case type.GET_ALL_ITEMS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case type.GET_ALL_ITEMS_SUCSESS:

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessesage: null,
                listItem: action.payload
            }

        case type.GET_ALL_ITEMS_RFAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessesage: action.payload.errorMessesage
            }
            
        
        default:
            return state;
    }
}