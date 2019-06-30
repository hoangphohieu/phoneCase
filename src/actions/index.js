import * as type from './../constants';

export function getAllItemsAPI() {
    return ({ type: type.GET_ALL_ITEMS_REQUEST })
}


export function patchitemAPI(payload) {
    return ({ type: type.PATCH_ITEM_REQUEST, payload })
}

export function addNewItemAPI(payload) {
    return ({ type: type.POST_ITEM_REQUEST, payload })
}
